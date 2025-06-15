document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const cropId = urlParams.get('id');
    
    
    const crops = [
        {
             id: 1,
            name: "Bhindi",
            price: 22,
            quantity: 10,
            location: "Meerut, Uttar Pradesh",
            seller: "Rajesh Kumar",
            image: "images/bhindi.png",
            category: "Vegetables",
            description: "Locally grown —fresh, green, and full of flavor for healthy, delicious meals every day!"
        },
        {
            id: 2,
            name: "Onion",
            price: 45,
            quantity: 30,
            location: "Nashik, Maharashtra",
            seller: "Vijay Patil",
            image: "images/onion.png",
            category: "Vegetables",
            description: "Fresh, flavorful onions straight from farm—locally grown, crisp, and perfect for every meal!."
        },
         {
            id: 3,
            name: "Spinach",
            price: 120,
            quantity: 20,
            location: "East Godavari, Andhra Pradesh",
            seller: "Sunil Patel",
            image: "images/spinach.png",
            category: "Vegetables",
            description: "Fresh, green spinach —nutritious, delicious, organic."
        },
        {
            id: 4,
            name: "Tomatoes",
            price: 18,
            quantity: 20,
            location: "Satna, Madhya Pradesh",
            seller: "Ramesh Gowda",
            image: "images/tomatoes.png",
            category: "Vegetables",
            description: "Fresh red tomatoes, perfect for cooking and salads."
        },
        {
            id: 5,
            name: "Cabbage",
            price: 150,
            quantity: 50,
            location: "Nadia, West Bengal",
            seller: "Karthik Das",
            image: "images/cabbage.png",
            category: "Vegetables",
            description: "Crisp, farm-fresh cabbage—perfect for salads, stir-fries, and hearty, healthy meals!."
        },
        {
            id: 6,
            name: "Potatoes",
            price: 15,
            quantity: 50,
            location: "Agra, Uttar Pradesh",
            seller: "Vikas Sharma",
            image: "images/potato.png",
            category: "Vegetables",
            description: "Fresh potatoes, good for all culinary uses. Cold Storage Facilities Available"
        },
        {
            id: 7,
            name: "Cauliflower",
            price: 15,
            quantity: 30,
            location: "Madhepura, Bihar",
            seller: "Ajay Kumar",
            image: "images/cauliflower.png",
            category: "Vegetables",
            description: "Fresh cauliflower —crunchy, wholesome, and great for any tasty, healthy recipe!"
        },
        {
            id: 8,
            name: "Bottle gourd",
            price: 20,
            quantity: 50,
            location: "Madhepura, Bihar",
            seller: "Ajay Kumar",
            image: "images/bottlegourd.jpg",
            category: "Vegetables",
            description: "Fresh bottle gourd—soft, tender, and perfect for nutritious, delicious home-cooked meals!"
        },
        {
            id: 9,
            name: "Brinjal",
            price: 25,
            quantity: 50,
            location: "Howrah, West Bengal",
            seller: "Satish Das",
            image: "images/brinjal.jpg",
            category: "Vegetables",
            description: "Fresh brinjal —shiny, tender, and perfect for flavorful cooking and grilling!"
        },
        {
            id: 10,
            name: "Green Chilli",
            price: 15,
            quantity: 50,
            location: "Guntur, Andhra Pradesh",
            seller: "Rajesh Jha",
            image: "images/greenchilli.jpg",
            category: "Vegetables",
            description: "Fresh green chillies—spicy, crisp, and perfect to add heat and flavor to any dish!"
        },
        {
            id: 11,
            name: "Banana",
            price: 30,
            quantity: 32,
            location: "Jalgaon,Maharashtra",
            seller: "Somesh Lambhate",
            image: "images/banana.jpg",
            category: "Fruits",
            description: "Fresh, ripe bananas—naturally sweet, nutritious, and perfect for snacks or smoothies!"
        },
        {
            id: 12,
            name: "Mango",
            price: 80,
            quantity: 75,
            location: "Ratnagiri, Maharashtra",
            seller: "Atmaram Patil",
            image: "images/mango.jpg",
            category: "Fruits",
            description: "Juicy, sweet mangoes—freshly picked and perfect for refreshing snacks and desserts!"
        },
        {
            id: 13,
            name: "Apple",
            price: 40,
            quantity: 60,
            location: "Mandi, Himachal Pradesh",
            seller: "Vinod Ram",
            image: "images/apple.jpg",
            category: "Fruits",
            description: "Crisp, fresh apples—sweet, juicy, and perfect for snacking or baking!"
        },
        {
            id: 14,
            name: "Pineapple",
            price: 25,
            quantity: 50,
            location: "Vazhakulam, Kerala",
            seller: "Arun Nair",
            image: "images/pineapple.jpg",
            category: "Fruits",
            description: "Sweet, juicy pineapples—freshly harvested for a tropical burst of flavor in every bite!"
        },
        {
            id: 15,
            name: "Watermelon",
            price: 20,
            quantity: 80,
            location: "Meerut, Uttar Pradesh",
            seller: "Anuj Kumar",
            image: "images/watermelon.jpg",
            category: "Fruits",
            description: "Refreshing, juicy watermelon—perfectly ripe for cooling off on hot days!"
        },
        {
            id: 16,
            name: "Papaya",
            price: 20,
            quantity: 80,
            location: "East Godavari, Andhra Pradesh",
            seller: "Sunil Patel",
            image: "images/papaya.jpg",
            category: "Fruits",
            description: "Sweet, ripe papaya—fresh, juicy, and packed with nutrients for a healthy treat!"
        },
        {
            id: 17,
            name: "Wheat",
            price: 70,
            quantity: 250,
            location: "Dewas, Madhya Pradesh",
            seller: "Jay Mehta",
            image: "images/wheat.jpg",
            category: "Grains",
            description: "Premium quality wheat—farm-fresh, natural, and perfect for soft, nutritious rotis and breads!"
        },
        {
            id: 18,
            name: "Rice",
            price: 50,
            quantity: 80,
            location: "Adilabad, Telangana",
            seller: "Ram Nair",
            image: "images/rice.jpg",
            category: "Grains",
            description: "Fresh, high-quality rice—naturally grown and perfect for fluffy, delicious meals every time!"
        },
        {
            id: 19,
            name: "Barley",
            price: 80,
            quantity: 140,
            location: "Dewas, Madhya Pradesh",
            seller: "Jay Mehta",
            image: "images/barley.jpg",
            category: "Grains",
            description: "Wholesome, farm-fresh barley—rich in nutrients and ideal for hearty, healthy meals."
        },
        {
            id: 20,
            name: "Bajra",
            price: 45,
            quantity: 84,
            location: "Sehore, Madhya Pradesh",
            seller: "Rakesh Sharma",
            image: "images/bajra.jpg",
            category: "Grains",
            description: "Nutritious, farm-fresh bajra—perfect for making hearty rotis and boosting everyday energy naturally!"
        },
        {
            id: 21,
            name: "Maize",
            price: 40,
            quantity: 90,
            location: "Mandya, Karnataka",
            seller: "Rakesh Sharma",
            image: "images/maize.jpg",
            category: "Grains",
            description: "Fresh, golden maize—sweet, crunchy, and perfect for boiling, roasting, or grinding into flour!"
        },
        {
            id: 22,
            name: "Urad dal",
            price: 70,
            quantity: 140,
            location: "Dewas, Madhya Pradesh",
            seller: "Akash Jha",
            image: "images/uraddal.jpg",
            category: "Grains",
            description: "Farm-fresh urad dal—rich in protein, perfect for dals, idlis, dosas, and everyday healthy cooking!"
        },
        {
            id: 23,
            name: "Moong dal",
            price: 82,
            quantity: 240,
            location: "Sehore, Madhya Pradesh",
            seller: "Rakesh Sharma",
            image: "images/moongdal.jpg",
            category: "Grains",
            description: "Nutritious moong dal—light, protein-rich, and perfect for soups, khichdi, and everyday healthy meals!"
        },
        {
            id: 24,
            name: "Oats",
            price: 140,
            quantity: 40,
            location: "Ludhiana, Punjab",
            seller: "Manpreet Singh",
            image: "images/oats.jpg",
            category: "Grains",
            description: "Healthy, whole oats—naturally grown and perfect for a hearty, nutritious start to your day!"
        }
        
    ];
    
    // matching crop with matching ID
    const crop = crops.find(item => item.id == cropId);
    
    if (crop) {
        //page with get updated with crop details
        document.getElementById('listingTitle').textContent = `${crop.name} - KissanSetu`;
        document.getElementById('listingCropName').textContent = crop.name;
        document.getElementById('listingPrice').textContent = `₹${crop.price}/kg`;
        document.getElementById('listingQuantity').textContent = `Available: ${crop.quantity}kg`;
        document.getElementById('listingLocation').textContent = crop.location;
        document.getElementById('listingDescription').textContent = crop.description;
        document.getElementById('listingSeller').textContent = crop.seller;
        document.getElementById('mainListingImage').src = crop.image;
        document.getElementById('listingType').textContent = crop.category.charAt(0).toUpperCase() + crop.category.slice(1);
        
        // Similar listings of same category
        const similarListings = crops.filter(item => item.category === crop.category && item.id != crop.id);
        const similarContainer = document.getElementById('similarListings');
        
        similarListings.forEach(item => {
            const listingCard = document.createElement('div');
            listingCard.className = 'listing-card';
            listingCard.innerHTML = `
                <div class="listing-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="listing-details">
                    <h3>${item.name}</h3>
                    <div class="listing-price">₹${item.price}/kg</div>
                    <div class="listing-meta">
                        <span>${item.quantity}kg available</span>
                        <span>${item.location}</span>
                    </div>
                    <div class="listing-actions">
                        <a href="listing.html?id=${item.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `;
            similarContainer.appendChild(listingCard);
        });
    }
    
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            
            this.classList.add('active');
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });
    
    // select quantity
    const decreaseQty = document.getElementById('decreaseQty');
    const increaseQty = document.getElementById('increaseQty');
    const orderQty = document.getElementById('orderQty');
    
    decreaseQty.addEventListener('click', function() {
        let qty = parseInt(orderQty.value);
        if (qty > 1) {
            orderQty.value = qty - 1;
        }
    });
    
    increaseQty.addEventListener('click', function() {
        let qty = parseInt(orderQty.value);
        orderQty.value = qty + 1;
    });
    
    // Add to cart 
    document.getElementById('addToCartBtn').addEventListener('click', function() {
        const qty = parseInt(orderQty.value);
        alert(`${qty}kg of ${crop.name} added to cart!`);
    });
    
    // Buy now 
    document.getElementById('buyNowBtn').addEventListener('click', function() {
        const qty = parseInt(orderQty.value);
        alert(`Redirecting to checkout for ${qty}kg of ${crop.name}`);
    });
});