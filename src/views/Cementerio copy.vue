<template>
  <v-container>


    <v-row style="margin-top: 5px">
      <v-col cols="8" style="text-align: left">
        <h2>CEMENTERIO PARQUE</h2>
      </v-col>
      <v-col cols="4" style="text-align: right">
        <v-btn color="primary">
          <v-icon class="fa fa-plus"></v-icon> Agregar Parcela
        </v-btn>
      </v-col>

    </v-row>
    <v-row>
      <template>
        <v-form ref="form" v-model="valid" lazy-validation>
          <div>
            <v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field>
            <v-text-field label="Another input"></v-text-field>
          </div>



          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
            Guardar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Cancelar
          </v-btn>

        </v-form>
      </template>
    </v-row>



    <v-row style="margin-top: 25px">
      <v-col cols="12">
        <template v-if="desserts != null && desserts != 'undefined'">
          <v-card>
            <v-card-title>
              Parcelas del Cementerio
              <v-spacer></v-spacer>
              <v-layout row wrap>
                <v-flex md4>

                  &nbsp;
                </v-flex>
                <v-flex md2>
                  <v-text-field label="Zona" single-line hide-details autofocus placeholder="Ingrese Zona.">
                  </v-text-field>
                </v-flex>
                <v-flex md2>
                  <v-text-field label="Manzana" single-line hide-details>
                  </v-text-field>
                </v-flex>
                <v-flex md2>
                  <v-text-field label="Lote" single-line hide-details>
                  </v-text-field>
                </v-flex>
                <v-flex md2>
                  <v-text-field v-model="search" append-icon="mdi-magnify" label="Nivel" single-line hide-details>
                  </v-text-field>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search">
              <template v-slot:[`item.nro_contrato`]="{ item }">
                <v-menu top :close-on-content-click="closeOnContentClick">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on" style="float: right">
                      <v-icon class="fa fa-bars"></v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item>
                      <v-btn :href="'/Editbadec'">
                        <v-icon small> mdi-pencil </v-icon> Editar
                      </v-btn>
                    </v-list-item>
                    <v-list-item>
                      <v-btn text @click="logicDelete(item.nro_bad)">
                        <v-icon small> mdi-delete </v-icon> Eliminar
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      search: "",
      headers: [
        { text: "Tipo", value: "tipo", width: "5%" },
        { text: "Mannzana", value: "manzana", width: "5%" },
        { text: "Lote", value: "lote", width: "5%" },
        { text: "Parcela", value: "parcela", width: "5%" },
        { text: "Nivel", value: "nivel", width: "5%" },
        // { text: "Nro Contrato", value: "nro_contrato",width: "5%" },
        { text: "Titular", value: "nom_titular1", width: "25%" },
        { text: "", value: "nro_contrato" }

      ],
      desserts: null,
      closeOnContentClick: false,
    };
  },
  methods: {
    setFocus() {
      this.form.Tipo.focus()// don't  work
    },
  },
  components: {},
  async mounted() {
    try {
      this.desserts = (await this.$http.get("/Cementerio/read")).data;
    } catch (error) {
      this.desserts = null;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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