<script>
    export let data;
 
    const product = data.product;
</script>
 
<svelte:head>
    <title>{product.name} – Sidrit Electronics</title>
    <meta name="description" content={product.description} />
</svelte:head>
 
 
<section class="py-16 bg-gray-100 text-center">
    <h1 class="text-5xl text-green-600">
        {product.name}
    </h1>
</section>
 
 
<section class="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-10 items-center">
 
    <div>
        <img
            src={product.image_url}
            alt={product.name}
            class="w-full h-[400px] object-cover rounded-lg shadow"
        />
    </div>
 
 
    <div>
        <h2 class="text-3xl font-semibold mb-4">
            {product.name}
        </h2>
 
        <p class="text-gray-600 mb-6">
            {product.description}
        </p>
 
        <p class="text-2xl text-green-600 font-bold mb-6">
            ${product.price}
        </p>
 
        <button class="bg-green-600 text-white px-6 py-3 rounded">
            Buy Now
        </button>
    </div>
 
</section>
 
 
 