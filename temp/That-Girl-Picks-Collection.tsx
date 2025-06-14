// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeCategory, setActiveCategory] = useState('All');
const [searchQuery, setSearchQuery] = useState('');
const [sortOption, setSortOption] = useState('Newest');
const [showSortOptions, setShowSortOptions] = useState(false);
const [visibleItems, setVisibleItems] = useState(9);
const categories = [
'All',
'Morning Routine',
'Self-Care',
'Workspace',
'Fitness',
'Home Decor',
'Skincare'
];
const sortOptions = [
'Newest',
'Popular',
'Price: High to Low',
'Price: Low to High'
];
const collections = [
{
id: 1,
title: 'Morning Routine Essentials',
category: 'Morning Routine',
description: 'Start your day with intention using these carefully selected morning ritual products.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20morning%20routine%20essentials%20on%20a%20white%20marble%20surface%20with%20soft%20natural%20light%2C%20featuring%20a%20stylish%20glass%20water%20bottle%2C%20journal%2C%20sleek%20coffee%20maker%2C%20minimalist%20alarm%20clock%2C%20and%20fresh%20flowers%20in%20neutral%20tones%20with%20a%20clean%2C%20serene%20background&width=600&height=900&seq=101&orientation=portrait',
products: 8,
rating: 4.8,
priceRange: '$15 - $89',
featured: true,
productImages: [
'https://readdy.ai/api/search-image?query=Minimalist%20glass%20water%20bottle%20with%20measurement%20markings%20on%20white%20marble%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20an%20elegant%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=111&orientation=squarish',
'https://readdy.ai/api/search-image?query=Elegant%20pour%20over%20coffee%20maker%20with%20wooden%20handle%20on%20white%20marble%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=112&orientation=squarish',
'https://readdy.ai/api/search-image?query=Minimalist%20digital%20alarm%20clock%20with%20soft%20display%20on%20white%20marble%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=113&orientation=squarish'
],
review: 'These products completely transformed my morning routine. The water bottle is gorgeous and helps me stay hydrated!'
},
{
id: 2,
title: 'Self-Care Sanctuary',
category: 'Self-Care',
description: 'Create your perfect relaxation space with these soothing self-care favorites.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20self-care%20products%20arranged%20beautifully%20on%20a%20light%20neutral%20background%20with%20soft%20shadows%2C%20featuring%20skincare%20items%2C%20bath%20accessories%2C%20candles%2C%20and%20wellness%20tools%20in%20a%20harmonious%20color%20palette%20of%20soft%20pinks%20and%20sage%20greens%20with%20minimalist%20styling&width=600&height=900&seq=102&orientation=portrait',
products: 12,
rating: 4.9,
priceRange: '$12 - $65',
featured: true,
productImages: [
'https://readdy.ai/api/search-image?query=Luxury%20scented%20candle%20in%20glass%20jar%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=121&orientation=squarish',
'https://readdy.ai/api/search-image?query=Rose%20quartz%20facial%20roller%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=122&orientation=squarish',
'https://readdy.ai/api/search-image?query=Lavender%20bath%20salts%20in%20clear%20glass%20jar%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=123&orientation=squarish'
],
review: 'The bath salts and candle combo is divine! Perfect for my Sunday self-care ritual.'
},
{
id: 3,
title: 'Productive Workspace',
category: 'Workspace',
description: 'Elevate your desk setup with these beautiful and functional office essentials.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20desk%20setup%20with%20minimalist%20organization%20tools%20on%20a%20clean%20white%20surface%2C%20featuring%20stylish%20stationery%2C%20planner%2C%20sleek%20laptop%20stand%2C%20elegant%20pen%20holder%2C%20and%20small%20plants%20with%20soft%20natural%20lighting%20and%20a%20serene%20neutral%20background&width=600&height=900&seq=103&orientation=portrait',
products: 10,
rating: 4.7,
priceRange: '$18 - $120',
featured: true,
productImages: [
'https://readdy.ai/api/search-image?query=Minimalist%20laptop%20stand%20in%20aluminum%20on%20white%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=131&orientation=squarish',
'https://readdy.ai/api/search-image?query=Elegant%20desk%20organizer%20with%20multiple%20compartments%20on%20white%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=132&orientation=squarish',
'https://readdy.ai/api/search-image?query=Stylish%20desk%20planner%20with%20minimal%20design%20on%20white%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=133&orientation=squarish'
],
review: 'The laptop stand improved my posture and the desk organizer keeps everything in place!'
},
{
id: 4,
title: 'Fitness Essentials',
category: 'Fitness',
description: 'Everything you need for an effective and stylish workout routine at home or on the go.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20fitness%20equipment%20arranged%20beautifully%20on%20a%20light%20neutral%20background%20with%20soft%20natural%20lighting%2C%20featuring%20a%20stylish%20yoga%20mat%2C%20resistance%20bands%2C%20water%20bottle%2C%20and%20small%20weights%20in%20a%20harmonious%20color%20palette%20of%20soft%20pinks%20and%20sage%20greens%20with%20minimalist%20styling&width=600&height=900&seq=104&orientation=portrait',
products: 9,
rating: 4.6,
priceRange: '$14 - $95',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Stylish%20yoga%20mat%20in%20soft%20pink%20color%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=141&orientation=squarish',
'https://readdy.ai/api/search-image?query=Set%20of%20pastel%20resistance%20bands%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=142&orientation=squarish',
'https://readdy.ai/api/search-image?query=Minimalist%20fitness%20tracker%20with%20slim%20design%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=143&orientation=squarish'
],
review: 'The resistance bands are perfect for my apartment workouts and the yoga mat is so comfortable!'
},
{
id: 5,
title: 'Cozy Bedtime Ritual',
category: 'Self-Care',
description: 'Transform your evening routine with these calming products for better sleep and relaxation.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20bedtime%20products%20arranged%20beautifully%20on%20a%20light%20neutral%20bedding%20with%20soft%20lighting%2C%20featuring%20silk%20pillowcase%2C%20sleep%20mask%2C%20essential%20oil%20diffuser%2C%20herbal%20tea%2C%20and%20a%20book%20in%20a%20harmonious%20color%20palette%20of%20soft%20blues%20and%20lavenders%20with%20minimalist%20styling&width=600&height=900&seq=105&orientation=portrait',
products: 7,
rating: 4.9,
priceRange: '$20 - $85',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Silk%20sleep%20mask%20in%20soft%20lavender%20color%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=151&orientation=squarish',
'https://readdy.ai/api/search-image?query=Elegant%20essential%20oil%20diffuser%20with%20wood%20base%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=152&orientation=squarish',
'https://readdy.ai/api/search-image?query=Luxury%20silk%20pillowcase%20folded%20neatly%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=153&orientation=squarish'
],
review: 'The silk pillowcase and sleep mask have been game changers for my hair and skin!'
},
{
id: 6,
title: 'Minimalist Skincare',
category: 'Skincare',
description: 'A curated collection of effective, clean skincare products for a simplified beauty routine.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20minimalist%20skincare%20products%20arranged%20beautifully%20on%20a%20marble%20surface%20with%20soft%20lighting%2C%20featuring%20glass%20bottles%2C%20serums%2C%20moisturizers%2C%20and%20jade%20roller%20in%20a%20harmonious%20color%20palette%20of%20whites%20and%20soft%20greens%20with%20clean%2C%20elegant%20styling&width=600&height=900&seq=106&orientation=portrait',
products: 6,
rating: 4.8,
priceRange: '$22 - $78',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Minimalist%20glass%20serum%20bottle%20with%20dropper%20on%20marble%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=161&orientation=squarish',
'https://readdy.ai/api/search-image?query=Elegant%20moisturizer%20in%20white%20jar%20on%20marble%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=162&orientation=squarish',
'https://readdy.ai/api/search-image?query=Jade%20facial%20roller%20on%20marble%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=163&orientation=squarish'
],
review: 'These products simplified my skincare routine while giving amazing results. My skin has never looked better!'
},
{
id: 7,
title: 'Mindful Journaling',
category: 'Self-Care',
description: 'Beautiful journals and writing tools to help you document your journey and practice gratitude.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20journaling%20supplies%20arranged%20beautifully%20on%20a%20light%20wood%20surface%20with%20soft%20natural%20lighting%2C%20featuring%20leather%20journal%2C%20elegant%20pens%2C%20washi%20tape%2C%20and%20dried%20flowers%20in%20a%20harmonious%20color%20palette%20of%20soft%20neutrals%20with%20minimalist%20styling&width=600&height=900&seq=107&orientation=portrait',
products: 8,
rating: 4.7,
priceRange: '$12 - $45',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Leather%20bound%20journal%20with%20strap%20closure%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=171&orientation=squarish',
'https://readdy.ai/api/search-image?query=Set%20of%20elegant%20writing%20pens%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=172&orientation=squarish',
'https://readdy.ai/api/search-image?query=Collection%20of%20pastel%20washi%20tape%20rolls%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=173&orientation=squarish'
],
review: 'The journal quality is exceptional and the pens write so smoothly. Perfect for my daily gratitude practice!'
},
{
id: 8,
title: 'Stylish Home Office',
category: 'Workspace',
description: 'Create an inspiring work-from-home space with these chic and functional desk accessories.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20home%20office%20setup%20with%20stylish%20desk%20accessories%20on%20a%20white%20desk%20with%20soft%20natural%20lighting%2C%20featuring%20gold%20desk%20organizer%2C%20elegant%20lamp%2C%20planner%2C%20and%20small%20plants%20in%20a%20harmonious%20color%20palette%20of%20whites%20and%20gold%20accents%20with%20minimalist%20styling&width=600&height=900&seq=108&orientation=portrait',
products: 11,
rating: 4.6,
priceRange: '$15 - $129',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Gold%20desk%20organizer%20with%20multiple%20compartments%20on%20white%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=181&orientation=squarish',
'https://readdy.ai/api/search-image?query=Minimalist%20desk%20lamp%20with%20adjustable%20arm%20on%20white%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=182&orientation=squarish',
'https://readdy.ai/api/search-image?query=Elegant%20weekly%20planner%20pad%20on%20white%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=183&orientation=squarish'
],
review: 'These pieces transformed my boring desk into a beautiful workspace that inspires me every day!'
},
{
id: 9,
title: 'Sustainable Kitchen',
category: 'Home Decor',
description: 'Eco-friendly kitchen essentials that combine style with sustainability for mindful living.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20sustainable%20kitchen%20products%20arranged%20beautifully%20on%20a%20light%20wood%20counter%20with%20soft%20natural%20lighting%2C%20featuring%20glass%20food%20containers%2C%20reusable%20bags%2C%20bamboo%20utensils%2C%20and%20cloth%20napkins%20in%20a%20harmonious%20color%20palette%20of%20soft%20greens%20and%20natural%20tones%20with%20minimalist%20styling&width=600&height=900&seq=109&orientation=portrait',
products: 9,
rating: 4.8,
priceRange: '$10 - $65',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Set%20of%20glass%20food%20storage%20containers%20with%20bamboo%20lids%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=191&orientation=squarish',
'https://readdy.ai/api/search-image?query=Reusable%20produce%20bags%20made%20of%20cotton%20mesh%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=192&orientation=squarish',
'https://readdy.ai/api/search-image?query=Bamboo%20utensil%20set%20with%20carrying%20case%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=193&orientation=squarish'
],
review: 'These sustainable swaps were so easy to incorporate into my daily routine and look beautiful in my kitchen!'
},
{
id: 10,
title: 'Yoga & Meditation',
category: 'Fitness',
description: 'Essential items for creating a peaceful yoga and meditation practice at home.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20yoga%20and%20meditation%20supplies%20arranged%20beautifully%20on%20a%20light%20wood%20floor%20with%20soft%20natural%20lighting%2C%20featuring%20premium%20yoga%20mat%2C%20meditation%20cushion%2C%20incense%20holder%2C%20and%20singing%20bowl%20in%20a%20harmonious%20color%20palette%20of%20soft%20neutrals%20and%20sage%20greens%20with%20minimalist%20styling&width=600&height=900&seq=110&orientation=portrait',
products: 8,
rating: 4.9,
priceRange: '$18 - $95',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Premium%20non-slip%20yoga%20mat%20in%20sage%20green%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=201&orientation=squarish',
'https://readdy.ai/api/search-image?query=Round%20meditation%20cushion%20with%20natural%20linen%20cover%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=202&orientation=squarish',
'https://readdy.ai/api/search-image?query=Brass%20singing%20bowl%20on%20wooden%20stand%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=203&orientation=squarish'
],
review: 'The meditation cushion is so comfortable and the singing bowl creates the perfect ambiance for my practice.'
},
{
id: 11,
title: 'Desk Plants & Accessories',
category: 'Workspace',
description: 'Bring life to your workspace with these beautiful plants and stylish plant accessories.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20desk%20plants%20and%20planters%20arranged%20beautifully%20on%20a%20white%20desk%20with%20soft%20natural%20lighting%2C%20featuring%20small%20succulents%2C%20air%20plants%2C%20minimalist%20planters%2C%20and%20plant%20care%20tools%20in%20a%20harmonious%20color%20palette%20of%20whites%20and%20soft%20greens%20with%20clean%20styling&width=600&height=900&seq=111&orientation=portrait',
products: 7,
rating: 4.7,
priceRange: '$12 - $48',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Small%20succulent%20in%20white%20ceramic%20planter%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=211&orientation=squarish',
'https://readdy.ai/api/search-image?query=Air%20plant%20in%20geometric%20glass%20terrarium%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=212&orientation=squarish',
'https://readdy.ai/api/search-image?query=Minimalist%20plant%20mister%20in%20copper%20finish%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=213&orientation=squarish'
],
review: 'These plants are so easy to care for and have completely transformed my workspace atmosphere!'
},
{
id: 12,
title: 'Hydration Essentials',
category: 'Morning Routine',
description: 'Stylish water bottles and accessories to help you stay hydrated throughout the day.',
image: 'https://readdy.ai/api/search-image?query=Aesthetic%20hydration%20products%20arranged%20beautifully%20on%20a%20light%20neutral%20surface%20with%20soft%20natural%20lighting%2C%20featuring%20stylish%20water%20bottles%2C%20infuser%20bottle%2C%20reusable%20straws%2C%20and%20fruit%20infusions%20in%20a%20harmonious%20color%20palette%20of%20soft%20blues%20and%20clear%20glass%20with%20minimalist%20styling&width=600&height=900&seq=112&orientation=portrait',
products: 6,
rating: 4.8,
priceRange: '$15 - $45',
featured: false,
productImages: [
'https://readdy.ai/api/search-image?query=Glass%20water%20bottle%20with%20silicone%20sleeve%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=221&orientation=squarish',
'https://readdy.ai/api/search-image?query=Fruit%20infuser%20water%20bottle%20with%20compartment%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=222&orientation=squarish',
'https://readdy.ai/api/search-image?query=Set%20of%20reusable%20glass%20straws%20with%20cleaning%20brush%20on%20neutral%20background%20with%20soft%20natural%20lighting%20and%20subtle%20shadows%20creating%20a%20clean%20aesthetic%20product%20photography&width=100&height=100&seq=223&orientation=squarish'
],
review: 'The glass water bottle is beautiful and the fruit infuser makes staying hydrated so much more enjoyable!'
}
];
useEffect(() => {
if (isMenuOpen) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'auto';
}
}, [isMenuOpen]);
const filteredCollections = collections
.filter(collection => {
if (activeCategory !== 'All' && collection.category !== activeCategory) {
return false;
}
if (searchQuery) {
const query = searchQuery.toLowerCase();
return (
collection.title.toLowerCase().includes(query) ||
collection.description.toLowerCase().includes(query) ||
collection.category.toLowerCase().includes(query)
);
}
return true;
})
.sort((a, b) => {
if (sortOption === 'Newest') {
return b.id - a.id;
} else if (sortOption === 'Popular') {
return b.rating - a.rating;
} else if (sortOption === 'Price: High to Low') {
const aPrice = parseInt(a.priceRange.split(' - ')[1].replace('$', ''));
const bPrice = parseInt(b.priceRange.split(' - ')[1].replace('$', ''));
return bPrice - aPrice;
} else if (sortOption === 'Price: Low to High') {
const aPrice = parseInt(a.priceRange.split(' - ')[0].replace('$', ''));
const bPrice = parseInt(b.priceRange.split(' - ')[0].replace('$', ''));
return aPrice - bPrice;
}
return 0;
});
const displayedCollections = filteredCollections.slice(0, visibleItems);
const loadMore = () => {
setVisibleItems(prev => prev + 6);
};
return (
<div className="min-h-screen bg-[#FDFCF8] text-gray-800 font-['Poppins',sans-serif]">
{/* Header */}
<header className="fixed top-0 left-0 right-0 bg-[#FDFCF8]/90 backdrop-blur-sm z-50 shadow-sm">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
<a href="#" className="font-['Playfair_Display',serif] text-2xl font-bold text-[#C4A3B0]">
thatgirlauraa
</a>
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
<a href="#" className="hover:text-[#C4A3B0] transition-colors duration-300">Home</a>
<a
href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/123534ef-4649-4363-8e69-3522a10a503a"
data-readdy="true"
className="text-[#C4A3B0] font-medium transition-colors duration-300"
>
That Girl Picks
</a>
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/8317ab41-3a5d-4885-a66f-e87bb8ef3eb2" data-readdy="true" className="hover:text-[#C4A3B0] transition-colors duration-300">Glow Journal</a>
<a href="#" className="hover:text-[#C4A3B0] transition-colors duration-300">About</a>
<a href="#" className="hover:text-[#C4A3B0] transition-colors duration-300">Contact</a>
</nav>
{/* Mobile Menu Button */}
<button
className="md:hidden text-gray-800 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => setIsMenuOpen(!isMenuOpen)}
>
<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
</button>
</div>
{/* Mobile Menu */}
{isMenuOpen && (
<div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
<div className="container mx-auto px-4 flex flex-col items-center space-y-6 text-xl">
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Home</a>
<a
href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/123534ef-4649-4363-8e69-3522a10a503a"
data-readdy="true"
className="w-full text-center py-4 border-b border-gray-100 text-[#C4A3B0] font-medium transition-colors duration-300"
onClick={() => setIsMenuOpen(false)}
>
That Girl Picks
</a>
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/8317ab41-3a5d-4885-a66f-e87bb8ef3eb2" data-readdy="true" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Glow Journal</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
</div>
</div>
)}
</header>
<main className="pt-20 pb-16">
{/* Page Title Section */}
<section className="py-12 bg-white">
<div className="container mx-auto px-4">
<div className="text-center max-w-3xl mx-auto">
<h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-4">
That Girl Picks
</h1>
<p className="text-gray-600 text-lg">
Carefully curated collections of products to elevate your lifestyle and wellness journey. Each item is personally tested and loved.
</p>
</div>
</div>
</section>
{/* Filter & Search Section */}
<section className="py-8 bg-[#FDFCF8] border-b border-gray-100">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
{/* Search Bar */}
<div className="relative w-full md:w-64">
<input
type="text"
placeholder="Search collections..."
className="w-full pl-10 pr-4 py-2 rounded-full border-none bg-white shadow-sm focus:ring-2 focus:ring-[#C4A3B0] focus:outline-none text-sm"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
<i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
</div>
{/* Category Pills */}
<div className="flex flex-wrap gap-2 w-full md:w-auto">
{categories.map((category) => (
<button
key={category}
className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
activeCategory === category
? 'bg-[#C4A3B0] text-white'
: 'bg-white text-gray-600 hover:bg-gray-100'
}`}
onClick={() => setActiveCategory(category)}
>
{category}
</button>
))}
</div>
{/* Sort Dropdown */}
<div className="relative w-full md:w-auto">
<button
className="flex items-center justify-between w-full md:w-48 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => setShowSortOptions(!showSortOptions)}
>
<span>Sort: {sortOption}</span>
<i className={`fas fa-chevron-${showSortOptions ? 'up' : 'down'} ml-2`}></i>
</button>
{showSortOptions && (
<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 py-1">
{sortOptions.map((option) => (
<button
key={option}
className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
onClick={() => {
setSortOption(option);
setShowSortOptions(false);
}}
>
{option}
</button>
))}
</div>
)}
</div>
</div>
</div>
</section>
{/* Collections Grid */}
<section className="py-12 bg-[#FDFCF8]">
<div className="container mx-auto px-4">
{filteredCollections.length === 0 ? (
<div className="text-center py-16">
<i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
<h3 className="text-xl font-medium text-gray-600 mb-2">No collections found</h3>
<p className="text-gray-500">Try adjusting your search or filter criteria</p>
</div>
) : (
<>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{displayedCollections.map((collection) => (
<div
key={collection.id}
className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
>
<div className="aspect-[2/3] overflow-hidden">
<img
src={collection.image}
alt={collection.title}
className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Playfair_Display',serif] text-xl font-bold">{collection.title}</h3>
<span className="bg-[#F7E7E6] text-[#C4A3B0] text-xs font-medium px-2.5 py-1 rounded-full">
{collection.category}
</span>
</div>
<p className="text-gray-600 mb-4">{collection.description}</p>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center">
<div className="flex text-yellow-400 mr-1">
{[...Array(5)].map((_, i) => (
<i
key={i}
className={`fas fa-star ${i < Math.floor(collection.rating) ? '' : i < collection.rating ? 'fa-star-half-alt' : 'text-gray-300'}`}
></i>
))}
</div>
<span className="text-sm text-gray-600">{collection.rating}</span>
</div>
<span className="text-sm text-gray-500">{collection.products} products</span>
</div>
<div className="flex items-center space-x-2 mb-4">
{collection.productImages.map((img, index) => (
<div key={index} className="w-12 h-12 rounded-lg overflow-hidden">
<img
src={img}
alt={`Product ${index + 1}`}
className="w-full h-full object-cover"
/>
</div>
))}
{collection.products > 3 && (
<div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-medium">
+{collection.products - 3}
</div>
)}
</div>
<div className="bg-gray-50 rounded-lg p-3 mb-4 text-sm italic text-gray-600">
"{collection.review}"
</div>
<div className="flex justify-between items-center">
<span className="font-medium text-gray-800">{collection.priceRange}</span>
<button className="bg-[#C4A3B0] hover:bg-[#b8919e] text-white px-4 py-2 rounded-full font-medium transition-colors duration-300 shadow-sm cursor-pointer !rounded-button whitespace-nowrap">
Shop Now
</button>
</div>
</div>
</div>
))}
</div>
{visibleItems < filteredCollections.length && (
<div className="text-center mt-12">
<button
onClick={loadMore}
className="bg-white hover:bg-gray-50 text-[#C4A3B0] border border-[#C4A3B0] px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm cursor-pointer !rounded-button whitespace-nowrap"
>
Load More
</button>
</div>
)}
</>
)}
</div>
</section>
{/* Newsletter Section */}
<section className="py-16 bg-[#D8E8D0]/30">
<div className="container mx-auto px-4">
<div className="max-w-2xl mx-auto text-center">
<h2 className="font-['Playfair_Display',serif] text-3xl font-bold mb-4">Join the Journey</h2>
<p className="text-gray-600 mb-8">
Subscribe to receive curated product recommendations, exclusive discounts, and mindful living inspiration straight to your inbox.
</p>
<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input
type="email"
placeholder="Your email address"
className="flex-1 px-4 py-3 rounded-full border-none focus:ring-2 focus:ring-[#C4A3B0] focus:outline-none text-sm"
/>
<button className="bg-[#C4A3B0] hover:bg-[#b8919e] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm cursor-pointer !rounded-button whitespace-nowrap">
Subscribe
</button>
</div>
<p className="text-xs text-gray-500 mt-4">
By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
</p>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-white py-12 border-t border-gray-100">
<div className="container mx-auto px-4">
<div className="flex flex-col items-center">
<a href="#" className="font-['Playfair_Display',serif] text-2xl font-bold text-[#C4A3B0] mb-6">
thatgirlauraa
</a>
<div className="flex space-x-6 mb-8">
<a href="#" className="text-gray-500 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">
<i className="fab fa-instagram text-xl"></i>
</a>
<a href="#" className="text-gray-500 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">
<i className="fab fa-pinterest text-xl"></i>
</a>
<a href="#" className="text-gray-500 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">
<i className="fab fa-tiktok text-xl"></i>
</a>
<a href="#" className="text-gray-500 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">
<i className="far fa-envelope text-xl"></i>
</a>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm">
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">Home</a>
<a
href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/123534ef-4649-4363-8e69-3522a10a503a"
data-readdy="true"
className="text-[#C4A3B0] font-medium transition-colors duration-300 cursor-pointer"
>
That Girl Picks
</a>
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/8317ab41-3a5d-4885-a66f-e87bb8ef3eb2" data-readdy="true" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">Glow Journal</a>
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">About</a>
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">Contact</a>
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">Privacy Policy</a>
</div>
<div className="text-xs text-gray-500 text-center max-w-2xl">
<p className="mb-2">
As an Amazon Associate I earn from qualifying purchases. This means that if you click on a link and make a purchase, I may receive a small commission at no extra cost to you.
</p>
<p>
© 2025 thatgirlauraa. All rights reserved.
</p>
</div>
</div>
</div>
</footer>
</div>
);
};
export default App