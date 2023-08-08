<template>
    
        <div>
            <h1>About Page</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Enim quas dolorum consectetur
                incidunt ipsa illum aliquid, facilis in distinctio ab.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Enim quas dolorum consectetur
                incidunt ipsa illum aliquid, facilis in distinctio ab.
            </p>
            <p> {{ data }}</p>
        </div>
</template>

<script setup>
const {data} = await useFetch('/api/currency/ADA')

console.log(data);

</script>

<style  scoped>
h1{
    margin-bottom: 20px;
    font-size: 36px;
    color: #333;
}
p{
    margin: 20px 0;
    color: #333;
}

</style>