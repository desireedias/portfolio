import 'styled-components'

interface ThemeProps {
  corPrincipal: string
  corSecundaria: string
  corDeFundo: string
  corDaBorda: string
  corDeFundoBotao: string
  corBotaoTema: string
  corBotao: string
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeProps {}
}
