<template>
  <f7-page name="about">
    <f7-navbar title="About" no-hairline no-shadow></f7-navbar>
    <f7-block-title>About My App</f7-block-title>
    <f7-block strong>
      <p>Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.</p>
      <p>Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias.</p>
    </f7-block>
    <f7-block style="margin: 0px 0px 20%">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!</p>
      <p>Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!</p>
      <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
      <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
      <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
      <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
      <f7-button large @click="$f7router.navigate('/form/')">Navigate</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    setNav: function() {

    }
  },
  mounted() {
    this.$f7ready((f7) => {

        console.log('About is on ......')
    });
  },
  created() {
        console.log('About is on ......')

  },
    destroyed() {
    console.log('Component destroyed. All assets move in on target on my mark.') // There's practically nothing here!
  }
}
</script>
