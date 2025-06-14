// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeCategory, setActiveCategory] = useState('All');
const [searchQuery, setSearchQuery] = useState('');
const [showSortOptions, setShowSortOptions] = useState(false);
const [sortOption, setSortOption] = useState('Latest');
const [visiblePosts, setVisiblePosts] = useState(6);
const categories = [
'All',
'Skincare',
'Wellness',
'Beauty',
'Lifestyle',
'Self-Care',
'Nutrition'
];
const sortOptions = [
'Latest',
'Most Popular',
'Most Read'
];
const blogPosts = [
{
id: 1,
title: 'The Ultimate Morning Skincare Routine for Glowing Skin',
category: 'Skincare',
date: 'June 10, 2025',
readTime: '8 min read',
description: 'Discover the perfect morning skincare routine that will leave your skin radiant and glowing all day long.',
image: 'https://readdy.ai/api/search-image?query=Beautiful%2520skincare%2520products%2520arranged%2520on%2520a%2520marble%2520vanity%2520with%2520soft%2520morning%2520light%2520streaming%2520through%2520sheer%2520curtains%252C%2520featuring%2520elegant%2520glass%2520bottles%2520of%2520serums%252C%2520moisturizers%2520with%2520a%2520jade%2520roller%252C%2520fresh%2520flowers%2520and%2520a%2520cup%2520of%2520herbal%2520tea%2520creating%2520a%2520serene%2520self-care%2520atmosphere&width=800&height=600&seq=101&orientation=landscape',
featured: true,
views: 2845,
author: 'Laura Bennett'
},
{
id: 2,
title: 'How to Create a Sustainable Self-Care Routine',
category: 'Self-Care',
date: 'June 8, 2025',
readTime: '6 min read',
description: 'Learn how to build a self-care routine that nurtures both you and the planet with these sustainable practices.',
image: 'https://readdy.ai/api/search-image?query=Sustainable%2520self-care%2520products%2520including%2520bamboo%2520hairbrush%252C%2520reusable%2520cotton%2520pads%252C%2520glass%2520containers%2520with%2520homemade%2520scrubs%252C%2520essential%2520oils%252C%2520and%2520plants%2520arranged%2520on%2520a%2520natural%2520wood%2520surface%2520with%2520soft%2520natural%2520lighting%2520and%2520a%2520calming%2520neutral%2520color%2520palette&width=800&height=600&seq=102&orientation=landscape',
featured: true,
views: 2156,
author: 'Laura Bennett'
},
{
id: 3,
title: 'The Benefits of Facial Massage for Lymphatic Drainage',
category: 'Beauty',
date: 'June 5, 2025',
readTime: '5 min read',
description: 'Explore how facial massage techniques can reduce puffiness and promote a healthier complexion through lymphatic drainage.',
image: 'https://readdy.ai/api/search-image?query=Woman%2520performing%2520facial%2520massage%2520with%2520rose%2520quartz%2520gua%2520sha%2520tool%2520and%2520jade%2520roller%2520on%2520clean%2520skin%2520with%2520facial%2520oil%252C%2520in%2520a%2520bright%2520bathroom%2520with%2520soft%2520lighting%252C%2520white%2520towels%252C%2520and%2520minimal%2520skincare%2520products%2520arranged%2520beautifully&width=600&height=400&seq=103&orientation=landscape',
featured: false,
views: 1893,
author: 'Laura Bennett'
},
{
id: 4,
title: 'Mindful Eating: How to Transform Your Relationship with Food',
category: 'Nutrition',
date: 'June 2, 2025',
readTime: '7 min read',
description: 'Discover the practice of mindful eating and how it can help you develop a healthier relationship with food and your body.',
image: 'https://readdy.ai/api/search-image?query=Beautiful%2520healthy%2520breakfast%2520bowl%2520with%2520colorful%2520fruits%252C%2520yogurt%252C%2520granola%2520and%2520seeds%2520on%2520a%2520light%2520wooden%2520table%2520with%2520a%2520cup%2520of%2520herbal%2520tea%252C%2520linen%2520napkin%252C%2520and%2520fresh%2520flowers%2520in%2520soft%2520morning%2520light%2520creating%2520a%2520peaceful%2520atmosphere&width=600&height=400&seq=104&orientation=landscape',
featured: false,
views: 1562,
author: 'Laura Bennett'
},
{
id: 5,
title: 'The Science Behind Double Cleansing',
category: 'Skincare',
date: 'May 29, 2025',
readTime: '6 min read',
description: 'Learn why double cleansing has become a skincare staple and the science that explains its effectiveness for all skin types.',
image: 'https://readdy.ai/api/search-image?query=Elegant%2520skincare%2520cleansing%2520products%2520including%2520oil%2520cleanser%2520and%2520foam%2520cleanser%2520with%2520soft%2520facial%2520cloths%2520on%2520a%2520marble%2520bathroom%2520counter%2520with%2520water%2520droplets%252C%2520soft%2520lighting%252C%2520and%2520minimal%2520styling%2520in%2520a%2520clean%2520aesthetic&width=600&height=400&seq=105&orientation=landscape',
featured: false,
views: 1847,
author: 'Laura Bennett'
},
{
id: 6,
title: 'Creating a Calming Bedtime Ritual for Better Sleep',
category: 'Wellness',
date: 'May 25, 2025',
readTime: '9 min read',
description: 'Discover how to design a relaxing bedtime routine that signals your body it\'s time to wind down for restful sleep.',
image: 'https://readdy.ai/api/search-image?query=Cozy%2520bedroom%2520scene%2520with%2520soft%2520bedding%252C%2520a%2520book%252C%2520herbal%2520tea%252C%2520lavender%2520essential%2520oil%252C%2520silk%2520sleep%2520mask%252C%2520and%2520gentle%2520candlelight%2520creating%2520a%2520peaceful%2520evening%2520atmosphere%2520with%2520warm%2520ambient%2520lighting%2520and%2520neutral%2520tones&width=600&height=400&seq=106&orientation=landscape',
featured: false,
views: 2103,
author: 'Laura Bennett'
},
{
id: 7,
title: 'How to Build a Minimalist Makeup Collection',
category: 'Beauty',
date: 'May 22, 2025',
readTime: '7 min read',
description: 'Learn how to curate a streamlined makeup collection that covers all your needs without the clutter and overwhelm.',
image: 'https://readdy.ai/api/search-image?query=Elegant%2520minimalist%2520makeup%2520collection%2520featuring%2520essential%2520products%2520in%2520sleek%2520packaging%2520arranged%2520beautifully%2520on%2520a%2520white%2520vanity%2520with%2520a%2520small%2520mirror%252C%2520makeup%2520brushes%2520in%2520a%2520holder%252C%2520and%2520soft%2520natural%2520lighting%2520creating%2520a%2520clean%2520aesthetic&width=600&height=400&seq=107&orientation=landscape',
featured: false,
views: 1756,
author: 'Laura Bennett'
},
{
id: 8,
title: 'Indoor Plants That Purify Air and Boost Your Mood',
category: 'Lifestyle',
date: 'May 18, 2025',
readTime: '5 min read',
description: 'Discover the best indoor plants that not only beautify your space but also improve air quality and enhance wellbeing.',
image: 'https://readdy.ai/api/search-image?query=Beautiful%2520arrangement%2520of%2520indoor%2520plants%2520including%2520monstera%252C%2520snake%2520plant%252C%2520and%2520pothos%2520in%2520stylish%2520ceramic%2520pots%2520on%2520a%2520wooden%2520shelf%2520with%2520soft%2520natural%2520light%2520streaming%2520through%2520a%2520window%2520in%2520a%2520bright%2520minimal%2520living%2520space&width=600&height=400&seq=108&orientation=landscape',
featured: false,
views: 1932,
author: 'Laura Bennett'
},
{
id: 9,
title: 'The Art of Slow Living in a Fast-Paced World',
category: 'Lifestyle',
date: 'May 15, 2025',
readTime: '8 min read',
description: 'Explore practical ways to embrace slow living principles for more meaning and joy in everyday moments.',
image: 'https://readdy.ai/api/search-image?query=Serene%2520slow%2520living%2520scene%2520with%2520a%2520person%2520enjoying%2520morning%2520coffee%2520by%2520a%2520window%2520with%2520a%2520book%252C%2520journal%252C%2520soft%2520blanket%252C%2520and%2520natural%2520light%2520streaming%2520in%252C%2520creating%2520a%2520peaceful%2520moment%2520of%2520mindfulness%2520in%2520a%2520cozy%2520neutral-toned%2520space&width=600&height=400&seq=109&orientation=landscape',
featured: false,
views: 2215,
author: 'Laura Bennett'
},
{
id: 10,
title: 'Understanding Skin Barrier Function and How to Protect It',
category: 'Skincare',
date: 'May 12, 2025',
readTime: '6 min read',
description: 'Learn about the importance of your skin barrier, signs of damage, and how to repair and maintain this crucial protective layer.',
image: 'https://readdy.ai/api/search-image?query=Close-up%2520of%2520healthy%2520glowing%2520skin%2520with%2520droplets%2520of%2520facial%2520oil%2520or%2520serum%2520being%2520applied%252C%2520alongside%2520gentle%2520skincare%2520products%2520for%2520barrier%2520repair%2520on%2520a%2520clean%2520marble%2520surface%2520with%2520soft%2520lighting%2520and%2520minimal%2520styling&width=600&height=400&seq=110&orientation=landscape',
featured: false,
views: 1876,
author: 'Laura Bennett'
},
{
id: 11,
title: 'How to Practice Digital Minimalism for Mental Clarity',
category: 'Wellness',
date: 'May 8, 2025',
readTime: '7 min read',
description: 'Discover strategies for reducing digital clutter and creating healthier technology habits for improved focus and wellbeing.',
image: 'https://readdy.ai/api/search-image?query=Peaceful%2520minimal%2520workspace%2520with%2520smartphone%2520turned%2520off%252C%2520simple%2520notebook%252C%2520pen%252C%2520plant%252C%2520and%2520cup%2520of%2520tea%2520on%2520a%2520clean%2520desk%2520by%2520a%2520window%2520with%2520natural%2520light%2520creating%2520a%2520calm%2520atmosphere%2520for%2520digital%2520detox&width=600&height=400&seq=111&orientation=landscape',
featured: false,
views: 2054,
author: 'Laura Bennett'
},
{
id: 12,
title: 'Seasonal Skincare: Transitioning Your Routine for Summer',
category: 'Skincare',
date: 'May 5, 2025',
readTime: '5 min read',
description: 'Learn how to adapt your skincare routine for warmer weather with lightweight formulas and increased sun protection.',
image: 'https://readdy.ai/api/search-image?query=Summer%2520skincare%2520products%2520including%2520lightweight%2520moisturizer%252C%2520facial%2520mist%252C%2520sunscreen%252C%2520and%2520aloe%2520vera%2520gel%2520arranged%2520with%2520citrus%2520slices%2520and%2520tropical%2520leaves%2520on%2520a%2520light%2520surface%2520with%2520bright%2520natural%2520lighting%2520and%2520fresh%2520summery%2520aesthetic&width=600&height=400&seq=112&orientation=landscape',
featured: false,
views: 1789,
author: 'Laura Bennett'
}
];
useEffect(() => {
if (isMenuOpen) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'auto';
}
}, [isMenuOpen]);
const filteredPosts = blogPosts
.filter(post => {
if (activeCategory !== 'All' && post.category !== activeCategory) {
return false;
}
if (searchQuery) {
const query = searchQuery.toLowerCase();
return (
post.title.toLowerCase().includes(query) ||
post.description.toLowerCase().includes(query) ||
post.category.toLowerCase().includes(query)
);
}
return true;
})
.sort((a, b) => {
if (sortOption === 'Latest') {
// Assuming newer posts have higher IDs
return b.id - a.id;
} else if (sortOption === 'Most Popular' || sortOption === 'Most Read') {
return b.views - a.views;
}
return 0;
});
const featuredPosts = filteredPosts.filter(post => post.featured);
const regularPosts = filteredPosts.filter(post => !post.featured);
const displayedPosts = [...featuredPosts, ...regularPosts.slice(0, visiblePosts)];
const loadMore = () => {
setVisiblePosts(prev => prev + 3);
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
href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/032efdaf-43f2-47b5-bf5b-66aa6af8cc69"
data-readdy="true"
className="hover:text-[#C4A3B0] transition-colors duration-300"
>
That Girl Picks
</a>
<a href="#" className="text-[#C4A3B0] font-medium transition-colors duration-300">Glow Journal</a>
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
href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/032efdaf-43f2-47b5-bf5b-66aa6af8cc69"
data-readdy="true"
className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300"
onClick={() => setIsMenuOpen(false)}
>
That Girl Picks
</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 text-[#C4A3B0] font-medium transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Glow Journal</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
</div>
</div>
)}
</header>
<main className="pt-20 pb-16">
{/* Hero Section */}
<section className="py-16 bg-[#F7E7E6]/30">
<div className="container mx-auto px-4">
<div className="text-center max-w-3xl mx-auto">
<h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-4">
Glow Journal
</h1>
<p className="text-gray-600 text-lg">
A collection of thoughtful articles on beauty, wellness, and mindful living to inspire your journey to becoming your most radiant self.
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
placeholder="Search articles..."
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
{/* Blog Posts Section */}
<section className="py-12 bg-[#FDFCF8]">
<div className="container mx-auto px-4">
{filteredPosts.length === 0 ? (
<div className="text-center py-16">
<i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
<h3 className="text-xl font-medium text-gray-600 mb-2">No articles found</h3>
<p className="text-gray-500">Try adjusting your search or filter criteria</p>
</div>
) : (
<>
{/* Featured Posts */}
{featuredPosts.length > 0 && (
<div className="mb-12">
<h2 className="font-['Playfair_Display',serif] text-2xl font-bold mb-6">Featured Articles</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{featuredPosts.map((post) => (
<div key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="aspect-[16/9] overflow-hidden">
<img
src={post.image}
alt={post.title}
className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="bg-[#F7E7E6] text-[#C4A3B0] text-xs font-medium px-2.5 py-1 rounded-full">
{post.category}
</span>
<div className="flex items-center text-gray-500 text-sm">
<i className="far fa-calendar-alt mr-1"></i>
<span>{post.date}</span>
</div>
</div>
<h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-3">{post.title}</h3>
<p className="text-gray-600 mb-4">{post.description}</p>
<div className="flex justify-between items-center">
<div className="flex items-center text-gray-500 text-sm">
<i className="far fa-clock mr-1"></i>
<span>{post.readTime}</span>
</div>
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/8ad6593d-a580-4fcc-90c1-b662c8f1106d" data-readdy="true" className="bg-[#C4A3B0] hover:bg-[#b8919e] text-white px-4 py-2 rounded-full font-medium transition-colors duration-300 shadow-sm cursor-pointer !rounded-button whitespace-nowrap inline-block no-underline">
Read More
</a>
</div>
</div>
</div>
))}
</div>
</div>
)}
{/* Regular Posts Grid */}
<div>
<h2 className="font-['Playfair_Display',serif] text-2xl font-bold mb-6">Latest Articles</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{regularPosts.slice(0, visiblePosts).map((post) => (
<div key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="aspect-[4/3] overflow-hidden">
<img
src={post.image}
alt={post.title}
className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<span className="bg-[#F7E7E6] text-[#C4A3B0] text-xs font-medium px-2.5 py-1 rounded-full">
{post.category}
</span>
<div className="flex items-center text-gray-500 text-xs">
<i className="far fa-calendar-alt mr-1"></i>
<span>{post.date}</span>
</div>
</div>
<h3 className="font-['Playfair_Display',serif] text-lg font-bold mb-2">{post.title}</h3>
<p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
<div className="flex justify-between items-center">
<div className="flex items-center text-gray-500 text-xs">
<i className="far fa-clock mr-1"></i>
<span>{post.readTime}</span>
</div>
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/8ad6593d-a580-4fcc-90c1-b662c8f1106d" data-readdy="true" className="bg-[#C4A3B0] hover:bg-[#b8919e] text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-sm cursor-pointer !rounded-button whitespace-nowrap inline-block no-underline">
Read More
</a>
</div>
</div>
</div>
))}
</div>
</div>
{/* Pagination */}
{visiblePosts < regularPosts.length && (
<div className="mt-12 flex flex-col items-center">
<button
onClick={loadMore}
className="bg-white hover:bg-gray-50 text-[#C4A3B0] border border-[#C4A3B0] px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm mb-6 cursor-pointer !rounded-button whitespace-nowrap"
>
Load More
</button>
<div className="flex items-center space-x-2">
<button className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#C4A3B0] hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-chevron-left text-xs"></i>
</button>
<button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#C4A3B0] text-white cursor-pointer !rounded-button whitespace-nowrap">1</button>
<button className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 hover:border-[#C4A3B0] hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">2</button>
<button className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 hover:border-[#C4A3B0] hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">3</button>
<span className="text-gray-400">...</span>
<button className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 hover:border-[#C4A3B0] hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fas fa-chevron-right text-xs"></i>
</button>
</div>
</div>
)}
</>
)}
</div>
</section>
{/* Newsletter Section */}
<section className="py-16 bg-[#F7E7E6]/30">
<div className="container mx-auto px-4">
<div className="max-w-2xl mx-auto text-center">
<h2 className="font-['Playfair_Display',serif] text-3xl font-bold mb-4">Stay in the Glow</h2>
<p className="text-gray-600 mb-8">
Subscribe to receive our latest articles, exclusive beauty tips, and wellness inspiration straight to your inbox.
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
href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/032efdaf-43f2-47b5-bf5b-66aa6af8cc69"
data-readdy="true"
className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer"
>
That Girl Picks
</a>
<a href="#" className="text-[#C4A3B0] font-medium transition-colors duration-300 cursor-pointer">Glow Journal</a>
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">About</a>
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">Contact</a>
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">Privacy Policy</a>
</div>
<div className="text-xs text-gray-500 text-center max-w-2xl">
<p className="mb-2">
All content and recommendations on this site are based on personal experience and research. Some links may be affiliate links, meaning I earn a small commission at no extra cost to you.
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