const { createMachine, interpret } = window.XState;

const radios = document.querySelectorAll('input[type="radio"][name="IsOversea"]')
const radiosArray = [...radios];

const 驗證資料 = createMachine({
    id: '驗證資料',
    initial: '境外驗證_否',
    states: {
        境外驗證_否: {
            entry: ['切換境外驗證'],
            on: {
                CHANGE: {
                    target: '境外驗證_是'
                }
            }
        },
        境外驗證_是: {
            entry: ['切換境外驗證'],
            on: {
                CHANGE: {
                    target: '境外驗證_否'
                }
            }
        }
    }
}, {
    actions: {
        切換境外驗證: (context, event, actionMeta) => {
            const 原狀態 = actionMeta.state.history?.value || actionMeta.state.machine.initialState.value
            const 新狀態 = actionMeta.state.value
            console.log(`[${原狀態}] ==> [${新狀態}]`)

            const key = actionMeta.state.value.split('_').pop()
            document.querySelectorAll(`.row-check`).forEach(a => {
                if (a.classList.contains(`row_${key}`)) {
                    a.classList.remove('d-none')
                } else {
                    a.classList.add('d-none')
                }
            })
        }
    }
});

const 驗證資料實例 = interpret(驗證資料);
驗證資料實例.start()
// 驗證資料實例.send('CHANGE');

radiosArray.forEach((item) => {
    item.addEventListener("change", function () {
        驗證資料實例.send('CHANGE');
    });
});
