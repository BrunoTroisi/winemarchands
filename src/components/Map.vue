<template>
    <div class="justify-content-center text-center align-items-center">
        <div class="row">
            <div class="col text-black p-5 text-center">
                <h3><em class="fas fa-map-marked-alt"></em><br>Dirección</h3><br>
                <h6>Oruro 1212, CABA</h6><br>
                <h3><em class="fas fa-clock"></em><br>Horarios de atención telefónica</h3><br>
                <h6>De lunes a viernes<br>
                    9:00hs a 18:00hs</h6><br>
                <h3><em class="fas fa-address-book"></em><br>Contacto</h3><br>
                <h6>unCorreo@servicio.com</h6><br>
            </div>
                <div class="map_canvas col-sm-6"> 
                <iframe title="marchandsmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.932637156151!2d-58.41228777544338!3d-34.62426835423095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88cb21f431ebbf07!2sThe%20Marchands%20Speakeasy!5e0!3m2!1sen!2sar!4v1607001128932!5m2!1sen!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
                </div>
        </div>
    </div>
</template>

<style scoped>
html, body, #map_canvas {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
#map_canvas {
    position: relative;
}
</style>