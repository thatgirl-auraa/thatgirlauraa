// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
useEffect(() => {
if (isMenuOpen) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'auto';
}
}, [isMenuOpen]);
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
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/032efdaf-43f2-47b5-bf5b-66aa6af8cc69" data-readdy="true" className="hover:text-[#C4A3B0] transition-colors duration-300">That Girl Picks</a>
<a href="#" className="hover:text-[#C4A3B0] transition-colors duration-300">Glow Journal</a>
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
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/032efdaf-43f2-47b5-bf5b-66aa6af8cc69" data-readdy="true" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>That Girl Picks</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Glow Journal</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
<a href="#" className="w-full text-center py-4 border-b border-gray-100 hover:text-[#C4A3B0] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
</div>
</div>
)}
</header>
<main className="pt-20 pb-16">
{/* Hero Section */}
<section className="relative py-20 md:py-32 overflow-hidden">
<div
className="absolute inset-0 z-0"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Soft%20aesthetic%20lifestyle%20flat%20lay%20with%20pink%20and%20sage%20green%20elements%2C%20delicate%20flowers%2C%20self-care%20items%2C%20journal%2C%20and%20minimalist%20decor%20arranged%20in%20a%20clean%2C%20airy%20composition%20with%20natural%20light%20and%20soft%20shadows%2C%20creating%20a%20serene%20and%20intentional%20atmosphere&width=1440&height=800&seq=1&orientation=landscape')`,
backgroundSize: 'cover',
backgroundPosition: 'center',
opacity: 0.15
}}
></div>
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-3xl mx-auto text-center">
<h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
Curated essentials for the girl she's becoming ✨
</h1>
<p className="text-lg md:text-xl text-gray-600 mb-8">
Discover mindful products and intentional routines for your journey to becoming that girl.
</p>
<button className="bg-[#C4A3B0] hover:bg-[#b8919e] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm cursor-pointer !rounded-button whitespace-nowrap">
Explore Collections
</button>
</div>
</div>
</section>
{/* That Girl Picks Section */}
<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-3">
🛍 That Girl Picks
</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Carefully curated collections of Amazon products to elevate your lifestyle and wellness journey.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Collection Card 1 */}
<div className="bg-[#FDFCF8] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="aspect-[2/3] overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Aesthetic%20morning%20routine%20essentials%20on%20a%20white%20marble%20surface%20with%20soft%20natural%20light%2C%20featuring%20a%20stylish%20glass%20water%20bottle%2C%20journal%2C%20sleek%20coffee%20maker%2C%20minimalist%20alarm%20clock%2C%20and%20fresh%20flowers%20in%20neutral%20tones%20with%20a%20clean%2C%20serene%20background&width=600&height=900&seq=2&orientation=portrait"
alt="Morning Routine Essentials"
className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-6">
<h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-2">Morning Routine Essentials</h3>
<p className="text-gray-600 mb-4">Start your day with intention using these carefully selected morning ritual products.</p>
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 cursor-pointer">
View Collection
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
{/* Collection Card 2 */}
<div className="bg-[#FDFCF8] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="aspect-[2/3] overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Aesthetic%20self-care%20products%20arranged%20beautifully%20on%20a%20light%20neutral%20background%20with%20soft%20shadows%2C%20featuring%20skincare%20items%2C%20bath%20accessories%2C%20candles%2C%20and%20wellness%20tools%20in%20a%20harmonious%20color%20palette%20of%20soft%20pinks%20and%20sage%20greens%20with%20minimalist%20styling&width=600&height=900&seq=3&orientation=portrait"
alt="Self-Care Sanctuary"
className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-6">
<h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-2">Self-Care Sanctuary</h3>
<p className="text-gray-600 mb-4">Create your perfect relaxation space with these soothing self-care favorites.</p>
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 cursor-pointer">
View Collection
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
{/* Collection Card 3 */}
<div className="bg-[#FDFCF8] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
<div className="aspect-[2/3] overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Aesthetic%20desk%20setup%20with%20minimalist%20organization%20tools%20on%20a%20clean%20white%20surface%2C%20featuring%20stylish%20stationery%2C%20planner%2C%20sleek%20laptop%20stand%2C%20elegant%20pen%20holder%2C%20and%20small%20plants%20with%20soft%20natural%20lighting%20and%20a%20serene%20neutral%20background&width=600&height=900&seq=4&orientation=portrait"
alt="Productive Workspace"
className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-6">
<h3 className="font-['Playfair_Display',serif] text-xl font-bold mb-2">Productive Workspace</h3>
<p className="text-gray-600 mb-4">Elevate your desk setup with these beautiful and functional office essentials.</p>
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 cursor-pointer">
View Collection
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
<div className="text-center mt-12">
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 text-lg cursor-pointer">
View All Collections
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</section>
{/* Glow Journal Section */}
<section className="py-16 bg-[#F7E7E6]/20">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-3">
✍️ Glow Journal
</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Lifestyle routines, wellness tips, and personal reflections to inspire your journey.
</p>
</div>
<div className="space-y-12">
{/* Journal Post 1 */}
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="md:w-1/2 overflow-hidden rounded-2xl">
<img
src="https://readdy.ai/api/search-image?query=Woman%20journaling%20in%20a%20cozy%20cafe%20with%20a%20cup%20of%20coffee%2C%20wearing%20a%20stylish%20casual%20outfit%20in%20neutral%20tones%2C%20with%20soft%20natural%20light%20streaming%20through%20windows%2C%20creating%20a%20peaceful%20and%20reflective%20atmosphere%20with%20minimal%20distractions%20in%20the%20background&width=700&height=500&seq=5&orientation=landscape"
alt="My 5-Step Morning Routine for Productivity and Peace"
className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="md:w-1/2">
<div className="font-['Libre_Baskerville',serif] italic text-[#C4A3B0] mb-2">
June 10, 2025 • Lifestyle
</div>
<h3 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold mb-3">
My 5-Step Morning Routine for Productivity and Peace
</h3>
<p className="text-gray-600 mb-4">
Discover how I transformed my mornings from chaotic to intentional with these five simple practices that have dramatically improved my productivity, mindfulness, and overall wellbeing.
</p>
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 cursor-pointer">
Read More
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
{/* Journal Post 2 */}
<div className="flex flex-col md:flex-row-reverse gap-8 items-center">
<div className="md:w-1/2 overflow-hidden rounded-2xl">
<img
src="https://readdy.ai/api/search-image?query=Aesthetic%20flat%20lay%20of%20skincare%20products%20on%20a%20marble%20surface%20with%20soft%20natural%20lighting%2C%20featuring%20glass%20bottles%2C%20jade%20roller%2C%20serums%2C%20and%20fresh%20flowers%20with%20pastel%20pink%20and%20sage%20green%20accents%20against%20a%20clean%20minimalist%20background%20with%20gentle%20shadows&width=700&height=500&seq=6&orientation=landscape"
alt="The Clean Beauty Essentials I Can't Live Without"
className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="md:w-1/2">
<div className="font-['Libre_Baskerville',serif] italic text-[#C4A3B0] mb-2">
June 5, 2025 • Beauty
</div>
<h3 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold mb-3">
The Clean Beauty Essentials I Can't Live Without
</h3>
<p className="text-gray-600 mb-4">
After years of testing countless products, I've finally curated my perfect clean beauty routine. These are the game-changing products that have transformed my skin and simplified my regimen.
</p>
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 cursor-pointer">
Read More
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
{/* Journal Post 3 */}
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="md:w-1/2 overflow-hidden rounded-2xl">
<img
src="https://readdy.ai/api/search-image?query=Woman%20meditating%20in%20a%20bright%2C%20minimal%20home%20setting%20with%20plants%2C%20wearing%20comfortable%20loungewear%20in%20neutral%20tones%2C%20with%20soft%20morning%20light%20creating%20a%20peaceful%20atmosphere%2C%20on%20a%20stylish%20yoga%20mat%20with%20clean%2C%20uncluttered%20surroundings%20in%20soft%20whites%20and%20beiges&width=700&height=500&seq=7&orientation=landscape"
alt="How I Built a Meditation Practice That Actually Sticks"
className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="md:w-1/2">
<div className="font-['Libre_Baskerville',serif] italic text-[#C4A3B0] mb-2">
May 28, 2025 • Wellness
</div>
<h3 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold mb-3">
How I Built a Meditation Practice That Actually Sticks
</h3>
<p className="text-gray-600 mb-4">
After years of starting and stopping, I finally found a way to make meditation a consistent part of my daily routine. Here's my journey and the practical tips that helped me build this life-changing habit.
</p>
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 cursor-pointer">
Read More
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
<div className="text-center mt-12">
<a href="#" className="inline-flex items-center text-[#C4A3B0] font-medium hover:text-[#b8919e] transition-colors duration-300 text-lg cursor-pointer">
View All Posts
<i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
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
<a href="https://readdy.ai/home/2e44fc79-a893-48a1-8ffd-7eac9e26f268/032efdaf-43f2-47b5-bf5b-66aa6af8cc69" data-readdy="true" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">That Girl Picks</a>
<a href="#" className="text-gray-600 hover:text-[#C4A3B0] transition-colors duration-300 cursor-pointer">Glow Journal</a>
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