import { defineStore } from 'pinia'

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
    component: {} as Component
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
    setRootLayout(prop: keyof Layout, payload: string) {
      this.layout[prop] = payload
    },
    setRootPage(prop: keyof Page, payload: string) {
      this.page[prop] = payload
    },
    setRootComponent(prop: keyof Component, payload: string) {
      this.component[prop] = payload
    }
  }
})