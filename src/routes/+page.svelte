<script>
import background from '$lib/assets/phone.jpg'

export let data;
</script>

<svelte:head>

<title>Sidrit Tech – Smart Devices & Phones</title>

<meta name="description" content="Sidrit Tech offers modern smartphones and electronic devices at fair prices. Browse our collection of reliable phones and tech." />

<meta name="keywords" content="smartphones, phones, electronics, iphone, samsung, technology store" />

<meta name="author" content="Sidrit Tech" />

<meta property="og:title" content="Sidrit Tech – Smart Devices & Phones" />
<meta property="og:description" content="Explore modern smartphones and reliable tech products at Sidrit Tech." />
<meta property="og:image" content={background} />
<meta property="og:type" content="website" />

</svelte:head>


<header class="h-[500px] bg-center bg-cover flex items-center justify-center "
style="background-image: url('https://res.cloudinary.com/dhhe3lytu/image/upload/v1772711408/photo-1764258560076-9530b22a1e8d_ptwwxe.avif')">

<div class="text-center bg-green-400/50 p-8 rounded-xl backdrop-blur-sm shadow-xl">

<h1 class="text-5xl text-white ">
Sidrit Tech Store
</h1>

<p class="text-gray-200 text-xl mt-4">
Smartphones and devices built for everyday life
</p>

</div>

</header>


<main>

<section class="max-w-6xl mx-auto p-8">

<header>
<h2 class="text-3xl font-semibold mb-6">
Available Devices
</h2>
</header>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    {#each data.products as product}

    <div class="rounded-sm p-5 bg-gray-200 shadow-xl">
    
    <img 
    src={product.image_url} 
    alt={product.name}
    class="w-full h-48 object-cover rounded mb-4 shadow-xl"
    />
    
    <h3 class="text-xl">
    {product.name}
    </h3>
    
    <p class="text-gray-600 mt-2">
    {product.description}
    </p>
    
    <p class="text-green-600 mt-4">
    ${product.price}
    </p>
    
    </div>
    
    {/each}

</div>

</section>

</main>


<footer class="h-[300px] bg-green-900 text-white flex items-center justify-center">

<section class="text-center max-w-xl">

<h2 class="text-2xl font-semibold mb-2">
Sidrit Tech
</h2>

<p class="text-gray-200">
Your place for modern smartphones and reliable technology.
Built with simplicity, quality, and performance in mind.
</p>

</section>

</footer>