import { setStore, getStore } from '@/util/store'
import { dateFormat } from '@/util/date'
// import { sendLogs } from '@/api/user'
const logs = {
    state: {
        logsList: getStore({ name: 'logsList' }) || [],
    },
    actions: {
        //发送错误日志
        SendLogs({ commit }) {
            return new Promise((resolve) => {
                commit('CLEAR_LOGS');
                resolve();
            })
        },
    },
    mutations: {
        ADD_LOGS: (state, { type, message, stack, info }) => {
            state.logsList.push(Object.assign({
                url: window.location.href,
                time: dateFormat(new Date())
            }, {
                    type,
                    message,
                    stack,
                    info: info.toString()
                }))
            setStore({ name: 'logsList', content: state.logsList })
        },
        CLEAR_LOGS: (state) => {
            state.logsList = [];
            setStore({ name: 'logsList', content: state.logsList })
        }
    }

};

export default logs;