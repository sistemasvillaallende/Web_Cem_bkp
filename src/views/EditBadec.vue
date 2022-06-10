<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="3"
        >
          <v-text-field
            v-model="badec.nro_bad"
            label="Nro contrib"
            clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="9"
        >
          <v-text-field
            v-model="badec.nombre"
            solo
            label="Nombre"
            clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
        <v-select
          :items="items"
          v-model="badec.tip_doc"
          label="Tipo Doc"
        ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="badec.nro_doc"
             label="Nro Doc"
            outlined
            clearable
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="badec.e_mail"
            label="Correo"
            outlined
                clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
         <v-col
          cols="12"
          sm="3"
        >
         
            <v-btn   @click="GuardaBadec()"  color="primary">
            Guardar
            </v-btn>
          </v-col>
 
         <v-col
          cols="12"
          sm="3"
        >
            <v-btn  @click="Cancelar()"  color="error">
            Cancelar
            </v-btn>
           </v-col>
    </v-row>


    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
      badec:null,
      items: ['DNI','L.C.','L.E','C.I. NACIONAL','C.I. EXTRANJERO','PASAPORTE','C-RAD','INDOCUMENTADO','NO DECLARA' ,'CUIT'],
      }
    },

    methods: {
        GuardaBadec() {
            if (this.$route.params.guid == 1) {
                alert('chau')
        this.$http
          .post("Tracks/update", { ...this.track })
          //eslint-disable-next-line
          .then((response) => {
            this.dialogOk = true;
          })
          //eslint-disable-next-line
          .catch((err) => {});
      } else {
        this.$http
          .post("/Badec/update2", { ...this.badec }).then(() => {
          })
          //eslint-disable-next-line
          .catch((err) => {});
          this.$router.push('/');

      }

        },
         Cancelar() {
        this.dialogOk = false;

      }
    },

    
   async mounted () {
        try {
      if (this.$route.params.guid == 1) {
        this.badec = (
          await this.$http.post("/Tracks/read", {
            guid: this.$route.params.guid,
          })
        ).data;
        console.log(this.curso);
      } else {

        this.badec = (await this.$http.get("/Badec/getByPk2?nro_bad=" + this.$route.params.guid)).data;
              //   alert(); 
      }
    } catch (error) {
      this.badec = null;
    }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {
  max-height: none;
  top: auto;
  bottom: 0;
  min-width: auto;
}
</style>
