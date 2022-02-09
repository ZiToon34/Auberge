<template>
    <div>
        <div id="container-nava"><img class="nava" alt="photo navacelles" src="@/assets/img/navacelles1.jpg"></div>
<div class="conteneur">
    <div class="box1">


        <div class="container">
            <div class="row">
                <div class="col-xl-8 offset-xl-2">
                    <form id="contact-form" action="https://formspree.io/f/xpzbqykn" method="POST">

                        <div class="messages"></div>

                        <div class="controls">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="form_name">Nom *</label>
                                        <input id="form_name" type="text" name="name" class="form-control"
                                            placeholder="Entrez vôtre Nom *" required="required"
                                            data-error="Nom Obligatoire.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="form_lastname">Prénom *</label>
                                        <input id="form_lastname" type="text" name="surname" class="form-control"
                                            placeholder="Entrez vôtre Prénom *" required="required"
                                            data-error="Prénom obligatoire.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="form_email">Email *</label>
                                        <input id="form_email" type="email" name="email" class="form-control"
                                            placeholder="Entrez vôtre Email *" required="required"
                                            data-error="email valide obligatoire.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="form_phone">Numéro</label>
                                        <input id="form_phone" type="tel" name="phone" class="form-control"
                                            placeholder="Entrez vôtre Numéro de Téléphone">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name="message" class="form-control"
                                    placeholder="Entrez vôtre Message *" rows="4" required="required"
                                    data-error="S'il vous plait, laissez nous un message."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="g-recaptcha" data-sitekey="6Lc5vVgeAAAAAAxKLV3EoFEnzzvpZ9bgq3o8pYAc"></div>
                            <br />
                            <input type="submit" class="btn btn-success btn-send" value="Envoyer message">

                        </div>

                    </form>

                </div>
                <!-- /.8 -->

            </div>
            <!-- /.row-->

        </div>
        <!-- /.container-->

    </div>
</div>
    </div>
</template>



<style scoped>
 /* CSS */
        #g-recaptcha-response {
            display: block !important;
            position: absolute;
            margin: -50px 0 0 0 !important;
            z-index: -999999;
            opacity: 0;
        }

</style>