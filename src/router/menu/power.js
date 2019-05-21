import * as MENU from './menu.js'
import * as MENUSON from './menuSon.js'
import {isSame} from '@/util/auth'

export let filter = () => {
    let authMenu = [];

    for (var name in MENU) {
        MENU[name].children = [];
        if (MENU[name].son.length!== 0) {
            for (let index = 0; index < MENU[name].son.length; index++) {
                if (isSame(MENUSON[MENU[name].son[index]].power)) {
                    MENU[name].children.push(MENUSON[MENU[name].son[index]])
                }
            }
            
            if (MENU[name].children.length !== 0) {
                authMenu.push(MENU[name])
            }
        }

        if (MENU[name].son.length === 0) {
            if (isSame(MENU[name].power)) {
                authMenu.push(MENU[name])                
            }
        }

    }

    for (let index = 0; index < authMenu.length; index++) {
       authMenu[index].id=index
    }
    return authMenu;
}