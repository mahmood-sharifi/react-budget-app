declare module 'jspdf' {
  interface jsPDF {
    autoTable: {previous : {finalY: number }}
  }
}