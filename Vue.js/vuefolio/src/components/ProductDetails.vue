<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>Price: {{ formattedPrice }}</p>
    <p>Status: {{ product.available ? 'Available' : 'Out of stock' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      // Функция для форматирования числа в строку с знаком валюты
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', // Здесь можно указать нужную валюту
        minimumFractionDigits: 2, // Количество знаков после запятой
      });

      // Форматируем цену продукта и возвращаем результат
      return formatter.format(this.product.price);
    },
  },
};
</script>