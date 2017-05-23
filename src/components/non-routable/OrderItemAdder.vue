<template>
  <div class="row order-item-adder">
    <div class="text-center" data-toggle="modal" data-target="#exampleModal">+</div>

    <div class="modal fade" tabindex="-1" id="exampleModal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Add item</h4>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <label for="order-item-name">Order item name</label>
                <input type="text" class="form-control" id="order-item-name" v-model="name">
              </div>
              <div class="form-group">
                <label for="order-item-price">Order item price</label>
                <input type="number" class="form-control" id="order-item-price" v-model="price">
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" @click.prevent="addItem" data-dismiss="modal" class="btn btn-primary">Add item</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        price: ''
      }
    },
    methods: {
      addItem () {
        const {name, price} = this
        this.$emit('itemAdded', {name, price})
      }
    }
  }
</script>
