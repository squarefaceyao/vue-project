<template>
  <div v-once>
    <Row type="flex" justify="center">
      <Col span="18">
        <Card class="thepaper-card">
          <h3 slot="title" align="center" >Introduction to PlantES</h3>
          <div align="center">
              <video width="425" height="344" controls >
                    <source src="./yao.mp4" type="video/mp4">
        
                Your browser does not support the video tag.
              </video>

                <div style="text-align:center; margin:0; padding:0; width:220px;">
                  <embed src="//ra.revolvermaps.com/f/g.swf" 
                  type="application/x-shockwave-flash" 
                  pluginspage="http://www.macromedia.com/go/getflashplayer" 
                  quality="high" 
                  wmode="window" 
                  allowScriptAccess="always" 
                  allowNetworking="all" 
                  width="220" 
                  height="220" 
                  flashvars="m=0&amp;i=0lz0rxz6qi8&amp;r=false&amp;v=false&amp;b=ffffff&amp;n=false&amp;s=220&amp;c=ffffff"></embed><br />
                  <img src="//ra.revolvermaps.com/js/c/0lz0rxz6qi8.gif" width="1" height="1" alt="" />
                  <!-- <a href="https://www.revolvermaps.com/livestats/0lz0rxz6qi8/">Large Visitor Globe</a> -->
                </div>           
          </div>

          
              



        </Card>
      </Col>
    </Row>
  </div>
</template>



<script >
export default {
}
</script>

<style scoped>
.thepaper-card {
  margin: 12px;
}
.thepaper-year {
  font-size: 18px;
  margin: 12px;
}
h3, p {
  margin: 12px;
}
</style>

