<template>
    <div id="experience" class="experience pt-10">
        
        
    </div>
</template>

<style scoped>

.card-container .card {
  font-weight: bold;
  position: relative;
  width: 100%;
}
.card-container .card a {
  padding: 30px;
  width: 100%;
  height: 450px;
  text-decoration: none;
  color: black;
  display: block;
  transition: 0.6s ease;
}
.card-container .card a:hover {
  transform: translate(-20px, -20px);
  border-color: #F77375;
}
.card-container .card a:hover .card--display {
  display: none;
}
.card-container .card a:hover .card--hover {
  display: block;
}
.card-container .card a .card--hover {
  display: none;
}
.card-container .card a .card--hover h2 {
  margin: 20px 0;
}
.card-container .card a .card--hover p {
  font-weight: normal;
  line-height: 1.5;
}
.card-container .card a .card--hover p.link {
  margin: 20px 0 0;
  font-weight: bold;
  color: #F77375;
}
.card-container .card .card--border {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: 1px dashed #F77375;
  z-index: -1;
}
</style>