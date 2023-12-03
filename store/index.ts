import axios from "axios"

import { setCookie, getCookie, clearCookie } from '~/utils/cookies'

interface Page {
  newProp?: string;
}
interface Layout {
  newProp?: string;
}
interface Component {
  newProp?: string;
}

export const useIndexStore = defineStore('index', {
  state: () => ({
    page: {} as Page,
    layout: {} as Layout,
    component: {} as Component,
  }),

  getters: {
    getLayout(): Layout {
      return this.layout
    },
    getPage(): Page {
      return this.page
    },
    getComponent(): Component {
      return this.component
    }
  },

  actions: {
    setRootLayout(prop: keyof Layout, payload: any) {
      this.layout[prop] = payload
    },
    setRootPage(prop: keyof Page, payload: any) {
      this.page[prop] = payload
    },
    setRootComponent(prop: keyof Component, payload: any) {
      this.component[prop] = payload
    },
  }
})