// --- MODAL DATA & LOGIC ---
const menuData = {
    'chapathi-rotti': {
        title: '<i class="ph-fill ph-bread"></i> Chapathi & Rotti ',
        content: `
                    <div class="space-y-4">
                        <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                            <h4 class="font-bold text-brand-green border-b border-green-100 pb-2 mb-2">Chapathi</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-green-500"></i> Plain Chapathi</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-green-500"></i> Menthya / Methi Chapathi</li>
                            </ul>
                        </div>
                        <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                            <h4 class="font-bold text-brand-green border-b border-green-100 pb-2 mb-2">Rotti</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-green-500"></i> Jolada Rotti / Jowar Rotti</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-green-500"></i> Ragi Rotti</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-green-500"></i> Rice Rotti</li>
                            </ul>
                        </div>
                    </div>
                `
    },
    'palya-curries': {
        title: '<i class="ph-fill ph-bowl-food"></i> Palya / Curries',
        content: `
                    <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                        <ul class="space-y-3 text-sm text-gray-700">
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Javalikayi / Cluster Beans Curry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Bendekayi / Ladyfinger Curry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Hesarkalu / Green Gram Curry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Dal Curry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Hirekayi Palya / Ridge Gourd Stir-fry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Mulgai Engai / Stuffed Eggplant Curry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Batani Palya / Green Peas Curry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Tomato Curry</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-leaf text-green-500"></i> Vegetable Curry</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-leaf text-green-500"></i> Paneer Curry</li>
                        </ul>
                    </div>
                `
    },
    'sambar-rasam': {
        title: '<i class="ph-fill ph-cooking-pot"></i> Sambar & Rasam',
        content: `
                    <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                        <ul class="space-y-3 text-sm text-gray-700">
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-drop text-orange-500"></i> Tarkaari / Mixed Vegetables Sambar</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-drop text-orange-500"></i> Nuggekayi / Drumstick Sambar</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-drop text-orange-500"></i> Hurulikal Molke Kaal / Horse Gram Sambar</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-drop text-orange-500"></i> Southekayi / Cucumber Sambar</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-drop text-orange-500"></i> Molke Hesarkalu / Sprouted Mung Bean Sambar</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-drop text-orange-500"></i> Hesarubele / Yellow Moong Dal Sambar</li>
                            <li class="flex items-center gap-2 border-b border-gray-50 pb-2"><i class="ph-fill ph-drop text-orange-500"></i> Soppu Bele / Green Leefi Sambar</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-drop text-red-500"></i> Rasam</li>
                        </ul>
                    </div>
                `
    },
    'rice-items': {
        title: '<i class="ph-fill ph-bowl-steam"></i> Rice & Sides',
        content: `
                    <div class="space-y-4">
                        <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                            <h4 class="font-bold text-brand-green border-b border-green-100 pb-2 mb-2">Rice Items</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-center gap-2"><i class="ph-fill ph-bowl-steam text-stone-500"></i> Plain White Rice</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-bowl-steam text-stone-500"></i> Jeera Rice</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-bowl-steam text-stone-500"></i> Ghee Rice</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-bowl-steam text-stone-500"></i> Palav</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-bowl-steam text-stone-500"></i> Fried Rice</li>
                            </ul>
                        </div>
                        <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                            <h4 class="font-bold text-brand-green border-b border-green-100 pb-2 mb-2">Sides</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-center gap-2"><i class="ph-fill ph-carrot text-orange-500"></i> Salad</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-pepper text-red-500"></i> Uppinkayi (Pickle)</li>
                                <li class="flex items-center gap-2"><i class="ph-fill ph-moon text-yellow-500"></i> Papad</li>
                            </ul>
                        </div>
                    </div>
                `
    },
    'sub-weekly-mini': {
        title: '<i class="ph-fill ph-calendar"></i> Weekly Plan Details',
        content: `
                    <div class="bg-white p-4 rounded-xl shadow-lg border border-brand-green mb-4 text-center">
                        <div class="text-3xl font-black text-brand-green mb-1">₹499</div>
                        <div class="text-xs font-bold text-gray-500 uppercase">Mon-Fri • 1 Time Meal</div>
                        <div class="mt-2 text-xs text-white bg-green-500 px-2 py-1 rounded-full inline-block font-bold animate-pulse-subtle"><i class="ph-bold ph-moped"></i> Free Delivery < 5km</div>
                    </div>
                    <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                        <h4 class="font-bold text-gray-800 mb-2">What it includes daily:</h4>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> 2 Chapathis or Rotis</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Vegetable Curry</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Salad</li>
                        </ul>
                    </div>
                `
    },
    'sub-weekly-full': {
        title: '<i class="ph-fill ph-calendar"></i> Weekly Plan Details',
        content: `
                    <div class="bg-white p-4 rounded-xl shadow-lg border border-brand-green mb-4 text-center">
                        <div class="text-3xl font-black text-brand-green mb-1">₹777</div>
                        <div class="text-xs font-bold text-gray-500 uppercase">Mon-Fri • 1 Time Meal</div>
                        <div class="mt-2 text-xs text-white bg-green-500 px-2 py-1 rounded-full inline-block font-bold animate-pulse-subtle"><i class="ph-bold ph-moped"></i> Free Delivery < 5km</div>
                    </div>
                    <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                        <h4 class="font-bold text-gray-800 mb-2">What it includes daily:</h4>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> 2 Chapathis or Rotis</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Vegetable Curry</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> White Rice</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Sambar</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Salad</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Pickle</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Buttermilk</li>
                        </ul>
                    </div>
                `
    },
    'sub-monthly-mini': {
        title: '<i class="ph-fill ph-calendar-star"></i> Monthly Plan Details',
        content: `
                    <div class="bg-gradient-to-br from-brand-green to-[#2d6a4f] p-4 rounded-xl shadow-md border border-brand-green mb-4 text-center relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-brand-accent text-brand-brown text-[10px] font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                        <div class="text-3xl font-black text-brand-accent mb-1">₹1800</div>
                        <div class="text-xs font-bold text-brand-light uppercase">Mon-Fri • 1 Time Meal</div>
                        <div class="mt-2 text-xs text-white border border-white/50 px-2 py-1 rounded-full inline-block font-bold animate-pulse-subtle"><i class="ph-bold ph-moped"></i> Free Delivery < 5km</div>
                    </div>
                    <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                        <h4 class="font-bold text-gray-800 mb-2">What it includes daily:</h4>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> 2 Chapathis or Rotis</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Vegetable Curry</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Salad</li>
                        </ul>
                    </div>
                `
    },
    'sub-monthly-full': {
        title: '<i class="ph-fill ph-calendar-star"></i> Monthly Plan Details',
        content: `
                    <div class="bg-gradient-to-br from-brand-green to-[#2d6a4f] p-4 rounded-xl shadow-md border border-brand-green mb-4 text-center relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-brand-accent text-brand-brown text-[10px] font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                        <div class="text-3xl font-black text-brand-accent mb-1">₹2222</div>
                        <div class="text-xs font-bold text-brand-light uppercase">Mon-Fri • 1 Time Meal</div>
                        <div class="mt-2 text-xs text-white border border-white/50 px-2 py-1 rounded-full inline-block font-bold animate-pulse-subtle"><i class="ph-bold ph-moped"></i> Free Delivery < 5km</div>
                    </div>
                    <div class="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                        <h4 class="font-bold text-gray-800 mb-2">What it includes daily:</h4>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> 2 Chapathis or Rotis</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Vegetable Curry</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> White Rice</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Sambar</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Salad</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Pickle</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check-circle text-brand-accent"></i> Buttermilk</li>
                        </ul>
                    </div>
                `
    }
};

function openModal(key) {
    const modal = document.getElementById('menuModal');
    document.getElementById('modalTitle').children[0].innerHTML = menuData[key].title;
    document.getElementById('modalBody').innerHTML = menuData[key].content;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('menuModal').classList.add('hidden');
    document.body.style.overflow = '';
}

