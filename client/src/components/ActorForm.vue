<template>
  <v-container grid-list-xs>
    <v-card
      class="mx-auto"
      max-width="800"
    >
      <v-card-title 
        class="justify-center"
      >
        Add Actor Name
      </v-card-title>
      <v-spacer></v-spacer>
      <v-form v-model="valid">
        <v-container>
          <v-row>

            <!-- First Name field -->
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="editedItem.first_name"
                counter
                :rules="nameRules"
                maxlength="45"
                label="First Name"
              ></v-text-field>
            </v-col>

            <!-- Last Name field -->
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="editedItem.last_name"
                counter
                :rules="nameRules"
                maxlength="45"
                label="Last Name"
              ></v-text-field>
            </v-col>

            
          </v-row>

          <!-- Actions button -->
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="2">
                    <v-btn
                        color="primary"
                        @click.stop="submit"
                        :disabled="!valid"
                    >Submit</v-btn>
                </v-col>
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                    <v-card>

                        <v-card-title>
                            <p v-if="success">Add Actor Name Success!</p>
                            <p v-if="!success">Add Actor Name Failed!</p>
                        </v-card-title>

                        <v-card-text>
                            <p v-if="success">You can check data in actor list!</p>
                            <p v-if="!success">Try again later!</p>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                @click.stop="dialog = !dialog"
                                :to="success ? '/' : $route.name"
                            >OK</v-btn>
                        </v-card-actions>

                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
    
</template>

<script>
import axios from 'axios'

export default {
    data(){
      return{
        dialog: false,
        editedItem: {
          first_name: '',
          last_name: '',
        },
        valid: false,
        isSuccess: false,
        nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 45 || 'Maximum only 45 character'
        ],
      }
    },
    computed: {
      success() {
        return this.isSuccess
      }
    },
    methods: {
      submit(){
        axios({
          method: 'post',
          url: 'http://localhost:8080/api/actor/',
          data: this.editedItem
        })
        .then(response => {
          this.isSuccess = true
          this.dialog = true
          console.log(response.data)
        })
        .catch(error => {
          this.dialog = true
          console.log(error)
        })       
      }
    }
}
</script>