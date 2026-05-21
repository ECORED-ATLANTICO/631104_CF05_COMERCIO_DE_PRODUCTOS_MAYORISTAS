<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El siglo XXI ha traído consigo grandes cambios en diferentes sectores a nivel mundial y el sector del comercio no se ha quedado atrás, ya que en él se ha visto un transformación e innovación digital que ha renovado el panorama de la compra y venta en la última década y, por supuesto, el trato entre el cliente y la empresa mediante el uso de la tecnología.
    p.mb-5 Por ello se hace necesario reenfocar el trabajo del servicio al cliente y rediseñar la venta y la posventa con el fin de estar a la vanguardia en el agitado mundo en el cual se mueven las empresas hoy. Sabiendo esto y lo desarrollado en el componente formativo, se invita a ver el siguiente esquema que representa de manera conceptual esta información:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src='@/assets/curso/sintesis.svg', alt='Este mapa conceptual, titulado "Manejo de información postventa", detalla el proceso de gestión de datos a través de siete ejes fundamentales: la clasificación de fuentes de información (primarias, secundarias, terciarias y no documentales); el procesamiento de datos, que abarca parámetros de calidad y técnicas de recolección como encuestas y entrevistas; el cumplimiento de la normativa y confidencialidad bajo la Ley 1581 de 2012; el uso de software para mediciones; la gestión de solicitudes (PQR); la estrategia de posventa; y la aplicación de técnicas de resolución de conflictos orientadas a la satisfacción del cliente.')
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
