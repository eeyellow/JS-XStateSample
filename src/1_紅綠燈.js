const { createMachine, interpret } = window.XState;

const 紅綠燈狀態機 = createMachine({
    id: '紅綠燈',
    context: {
        // 資料 (data) 存在 context 裡，key 可以自己訂
        count: 0,
        user: null,
    },
    initial: '紅燈',
    states: {
        紅燈: {
            entry: ['紀錄進入', '轉換燈號'],
            exit: ['紀錄離開'],
            on: {
                CHANGE: {
                    target: '綠燈',
                }
            }
        },
        綠燈: {
            entry: ['紀錄進入', '轉換燈號'],
            exit: ['紀錄離開'],
            on: {
                CHANGE: {
                    target: '黃燈',
                }
            }
        },
        黃燈: {
            entry: ['紀錄進入', '轉換燈號'],
            exit: ['紀錄離開'],
            on: {
                CHANGE: {
                    target: '紅燈',
                }
            }
        },
    }
}, {
    actions: {
        紀錄離開: (context, event, actionMeta) => {
            document.querySelector('#LogArea').textContent = `離開${actionMeta.state.history.value}` + '\n' + document.querySelector('#LogArea').textContent
        },
        紀錄進入: (context, event, actionMeta) => {
            document.querySelector('#LogArea').textContent = `進入${actionMeta.state.value}` + '\n' + document.querySelector('#LogArea').textContent
        },
        轉換燈號: (context, event, actionMeta) => {
            document.querySelectorAll('.dotContainer').forEach(c => {
                c.querySelectorAll('.dot').forEach(d => {
                    if (d.classList.contains(actionMeta.state.value)) {
                        d.classList.remove('inactive')
                    } else {
                        d.classList.add('inactive')
                    }
                })
            })
        },
    }
});

const 紅綠燈實例 = interpret(紅綠燈狀態機)
// 啟動 service
紅綠燈實例.start();
// 停止 service 當你不再使用它
// 紅綠燈實例.stop();

document.querySelector('.燈號轉換').addEventListener('click', function () {
    紅綠燈實例.send('CHANGE');
});

// eslint-disable-next-line no-debugger
window.紅綠燈實例 = 紅綠燈實例;
