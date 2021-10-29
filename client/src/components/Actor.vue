<template>
  <v-container grid-list-xs>
    <v-card>
      <v-card-title>
        Actor List
        <v-spacer></v-spacer>
        <!-- Search panel -->
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <!-- List Actor Table -->
      <v-data-table
        :headers="headers"
        :items="actor"
        :search="search"
      >
      <!-- Dialog -->
      <template v-slot:top>
        <v-dialog v-model="dialogDelete" max-width="405">
          <v-card
            light
          >
            <v-card-title>Are you sure to delete this Actor Data?</v-card-title>
            <v-card-actions class="justify-center mt-6">
              <v-btn color="blue darken-1" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" @click="deleteItemConfirm">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
        <v-dialog v-model="dialogEdit" max-width="405">
          <v-card>
            <v-card-title>
              <span class="text-h5">Edit Name</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.first_name"
                      label="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.last_name"
                      label="Last Name"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                @click="closeEdit"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                @click="editItemConfirm"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>



      <!-- Actions colom -->
      <template v-slot:[`item.actions`]="{ item }">
          <v-icon class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon @click="deleteItem(item)">
            mdi-delete
          </v-icon>
      </template>
      </v-data-table>
    </v-card>
    <v-card class="mt-4" max-width="150">
      <v-card-actions class="justify-center">
        <v-btn
        color="blue darken-1"
        class="my-2"
        @click="deleteAll"
      >
      DELETE ALL
      </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
import axios from 'axios'

export default {
    name:'Actor',
    props:{
        title:String,
    },
    data(){ 
      return{
        search:'',
        dialogDelete: false,
        dialogEdit: false,
        selectedItemIndex: -1,
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: true,
            value: 'actor_id',
          },
          {
            text: 'First Name',
            sortable: true,
            value: 'first_name',
          },
          {
            text: 'Last Name',
            sortable: true,
            value: 'last_name',
          },
          {
            text: 'Edit & Delete',
            sortable: false,
            value: 'actions',
          }
        ],
        actor:[
        ],
        editedIndex: -1,
        editedItem: {
          first_name: '',
          last_name: ''
        },
        defaultItem: {
          first_name: '',
          last_name: ''
        },
      }
    },

    watch: {
      dialogEdit (val) {
        val || this.closeEdit()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    computed: {
      success() {
        return this.isSuccess
      }
    },
    methods: {
        deleteItem(item){
            this.selectedItemIndex = this.actor.indexOf(item)
            this.dialogDelete = true
        },
        deleteAll() {
          axios
            .delete(`http://localhost:8080/api/actor`)
            .then(response => {
              this.actor.splice(this.selectedItemIndex, 1)
              this.closeDelete()
                console.log("All data has been deleted.", response.data)
            })
            .catch(error => {
              console.log(error)
            })
        },
        closeDelete(){
            this.dialogDelete = false
            this.$nextTick(() => {
              this.selectedItemIndex = -1
            })
        },
        deleteItemConfirm(){
            const deleteActor = this.actor[this.selectedItemIndex]
            axios
                .delete(`http://localhost:8080/api/actor/${deleteActor.actor_id}`)
                .then(response => {
                    this.actor.splice(this.selectedItemIndex, 1)
                    this.closeDelete()
                    console.log("This data has been deleted.", response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        editItem(item){
            this.editedItem = Object.assign({}, item)
            this.selectedItemIndex = this.actor.indexOf(item)
            this.dialogEdit = true
        },
        closeEdit(){
            this.dialogEdit = false
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
            location.reload()
        },
        editItemConfirm(){
          const editActor = this.actor[this.selectedItemIndex]

          axios({
                method: 'put',
                url: `http://localhost:8080/api/actor/${editActor.actor_id}`,
                data: this.editedItem
              })
              .then(response => {
                this.isOperationSuccess = true
                this.dialog = true
                console.log(response.data)
              })
              .catch(error => console.log(error))
          this.closeEdit()
        }
    },
    mounted() {
      axios
        .get('http://localhost:8080/api/actor')
        .then(response => {
          this.actor = response.data
          console.log(response.data)
        })
        .catch(error => console.log(error))
    },
    created(){
      const idActor = this.actor[this.selectedItemIndex]
      axios
        .get(`http://localhost:8080/api/actor/${idActor.actor_id}`)
        .then(response => {
          this.employee = response.data[0]
          this.editItem(this.employee)           
      })
      .catch(error => {
        console.log(error)
      })
    }  
}
</script>