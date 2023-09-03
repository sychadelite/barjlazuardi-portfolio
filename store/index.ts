import axios from "axios"

import { setCookie, getCookie, clearCookie } from '~/utils/cookies'

interface Page {
  newProp?: string;
}
interface Layout {
  newProp?: string;
}

export const useIndexStore = defineStore('index', {
  state: () => ({
    page: {} as Page,
    layout: {} as Layout,
  }),

  getters: {
    getLayout(): Layout {
      return this.layout
    },
    getPage(): Page {
      return this.page
    }
  },

  actions: {
    setRootLayout(prop: keyof Layout, payload: any) {
      this.layout[prop] = payload
    },
    setRootPage(prop: keyof Page, payload: any) {
      this.page[prop] = payload
    },
  }
})