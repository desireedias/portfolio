// NOVO CÓDIGO FINAL (OPÇÃO MAIS SEGURA PARA CRA)

// Removido o import { ReportHandler } do topo

const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Força o TypeScript a ignorar o erro de tipagem na importação dinâmica
    ;(import('web-vitals') as any).then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }: any) => {
        getCLS(onPerfEntry)
        getFID(onPerfEntry)
        getFCP(onPerfEntry)
        getLCP(onPerfEntry)
        getTTFB(onPerfEntry)
      }
    )
  }
}

export default reportWebVitals
