<template>
  <div class="w-full mx-auto min-h-screen mt-10">
    <SectionHeader title="Paket Umrah" />
    <Divider />
    <div class="grid grid-cols-1 lg:grid-cols-3 justify-center">
      <div class="mt-10" v-for="(datas, index) in umrahDatas" :key="index">
        <ProductCard
          :image="datas.image"
          :title="datas.title"
          :description="datas.description"
          :price="datas.price"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import ProductCard from "../components/ProductCard.vue";
import SectionHeader from "../layouts/SectionHeader.vue";
import Divider from "../components/Divider.vue";
import { umrahDatas } from "../data/umrahData";
</script>
