document.addEventListener('DOMContentLoaded', function() {
    
    const cropData = [
        {
            id: 1,
            name: "Bhindi",
            category: "Vegetables",
            listings: 12,
            availableQty: 10,
            avgPrice: 22,
            demand: "high",
            ordersLastWeek: 40
        },
        {
            id: 2,
            name: "Onion",
            category: "Vegetables",
            listings: 8,
            availableQty: 30,
            avgPrice: 45,
            demand: "medium",
            ordersLastWeek: 30
        },
        {
            id: 3,
            name: "Spinach",
            category: "Vegetables",
            listings: 2,
            availableQty: 20,
            avgPrice: 20,
            demand: "low",
            ordersLastWeek: 18
        },
        {
            id: 4,
            name: "Tomatoes",
            category: "Vegetables",
            listings: 12,
            availableQty: 20,
            avgPrice: 18,
            demand: "high",
            ordersLastWeek: 20
        },
        {
            id: 5,
            name: "Cabbage",
            category: "Vegetables",
            listings: 5,
            availableQty: 50,
            avgPrice: 25,
            demand: "medium",
            ordersLastWeek: 12
        },
        {
            id: 6,
            name: "Potatoes",
            category: "Vegetables",
            listings: 22,
            availableQty: 50,
            avgPrice: 15,
            demand: "high",
            ordersLastWeek: 38
        },
        {
            id: 7,
            name: "Cauliflower",
            category: "Vegetable",
            listings: 12,
            availableQty: 30,
            avgPrice: 15,
            demand: "medium",
            ordersLastWeek: 28
        },
        {
            id: 8,
            name: "Bottle Gourd",
            category: "Vegetable",
            listings: 19,
            availableQty: 50,
            avgPrice: 25,
            demand: "low",
            ordersLastWeek: 3
        },
        {
            id: 9,
            name: "Brinjal",
            category: "Vegetable",
            listings: 9,
            availableQty: 50,
            avgPrice: 25,
            demand: "low",
            ordersLastWeek: 3
        },
         {
            id: 10,
            name: "Green Chilli",
            category: "Vegetable",
            listings: 13,
            availableQty: 50,
            avgPrice: 15,
            demand: "medium",
            ordersLastWeek: 21
        },
         {
            id: 11,
            name: "Banana",
            category: "Fruits",
            listings: 6,
            availableQty: 32,
            avgPrice: 30,
            demand: "low",
            ordersLastWeek: 3
        },
        {
            id: 12,
            name: "Mango",
            category: "Fruits",
            listings: 12,
            availableQty: 75,
            avgPrice: 80,
            demand: "high",
            ordersLastWeek: 38
        },
        {
            id: 13,
            name: "Apple",
            category: "Fruits",
            listings: 8,
            availableQty: 60,
            avgPrice: 40,
            demand: "medium",
            ordersLastWeek: 15
        },
        {
            id: 14,
            name: "Pineapple",
            category: "Fruits",
            listings: 4,
            availableQty: 50,
            avgPrice: 25,
            demand: "low",
            ordersLastWeek: 7
        },
        {
            id: 15,
            name: "Watermelon",
            category: "Fruits",
            listings: 9,
            availableQty: 80,
            avgPrice: 20,
            demand: "high",
            ordersLastWeek: 38
        },
        {
            id: 16,
            name: "Papaya",
            category: "Fruits",
            listings: 16,
            availableQty: 80,
            avgPrice: 20,
            demand: "low",
            ordersLastWeek: 8
        },
        {
            id: 17,
            name: "Wheat",
            category: "Grains",
            listings: 17,
            availableQty: 250,
            avgPrice: 70,
            demand: "high",
            ordersLastWeek: 43
        }, 
          {
            id: 18,
            name: "Rice",
            category: "Grains",
            listings: 13,
            availableQty: 80,
            avgPrice: 50,
            demand: "medium",
            ordersLastWeek: 17
        }, 
          {
            id: 19,
            name: "Barley",
            category: "Grains",
            listings: 11,
            availableQty: 140,
            avgPrice: 80,
            demand: "high",
            ordersLastWeek: 43
        }, 
          {
            id: 20,
            name: "Bajra",
            category: "Grains",
            listings: 12,
            availableQty: 84,
            avgPrice: 45,
            demand: "medium",
            ordersLastWeek: 13
        }, 
          {
            id: 21,
            name: "Maize",
            category: "Grains",
            listings: 15,
            availableQty: 90,
            avgPrice: 40,
            demand: "medium",
            ordersLastWeek: 17
        }, 
          {
            id: 22,
            name: "Urad Dal",
            category: "Grains",
            listings: 14,
            availableQty: 140,
            avgPrice: 70,
            demand: "low",
            ordersLastWeek: 8
        }, 
          {
            id: 23,
            name: "Moong Dal",
            category: "Grains",
            listings: 7,
            availableQty: 240,
            avgPrice: 82,
            demand: "high",
            ordersLastWeek: 32
        }, 
          {
            id: 24,
            name: "Oats",
            category: "Grains",
            listings: 7,
            availableQty: 40,
            avgPrice: 140,
            demand: "low",
            ordersLastWeek: 7
        }      

    ];

    
    const availabilityData = document.getElementById('availabilityData');
    const categoryFilter = document.getElementById('categoryFilter');
    const totalProducts = document.getElementById('totalProducts');
    const totalQuantity = document.getElementById('totalQuantity');
    const avgPrice = document.getElementById('avgPrice');
    const activeSellers = document.getElementById('activeSellers');

    
    function calculateSummary(data) {
        const totalProductsCount = data.length;
        const totalQty = data.reduce((sum, crop) => sum + crop.availableQty, 0);
        const totalPrice = data.reduce((sum, crop) => sum + crop.avgPrice, 0);
        const avgPriceValue = totalPrice / totalProductsCount;
        
        // Count unique sellers
        const sellerCount = new Set(data.map(crop => crop.listings)).size;
        
        
        totalProducts.textContent = totalProductsCount;
        totalQuantity.textContent = `${totalQty.toLocaleString()} kg`;
        avgPrice.textContent = `₹${avgPriceValue.toFixed(2)}/kg`;
        activeSellers.textContent = sellerCount;
    }

    
    function renderAvailabilityTable(data) {
        availabilityData.innerHTML = '';
        
        data.forEach(crop => {
            const row = document.createElement('tr');
            
            
            let demandClass = '';
            let demandText = '';
            switch(crop.demand) {
                case 'high':
                    demandClass = 'demand-high';
                    demandText = 'High';
                    break;
                case 'medium':
                    demandClass = 'demand-medium';
                    demandText = 'Medium';
                    break;
                case 'low':
                    demandClass = 'demand-low';
                    demandText = 'Low';
                    break;
            }
            
            row.innerHTML = `
                <td>${crop.name}</td>
                <td>${crop.category.charAt(0).toUpperCase() + crop.category.slice(1)}</td>
                <td>${crop.listings}</td>
                <td>${crop.availableQty.toLocaleString()} kg</td>
                <td>₹${crop.avgPrice}/kg</td>
                <td class="${demandClass}">${demandText}</td>
                <td><a href="crop-prices.html?category=${crop.category}&crop=${crop.name.toLowerCase()}" class="view-listings-btn">View Listings</a></td>
            `;
            
            availabilityData.appendChild(row);
        });
    }

    
    function filterData() {
        const category = categoryFilter.value;
        let filteredData = cropData;
        
        if (category !== 'all') {
            filteredData = cropData.filter(crop => crop.category === category);
        }
        
        renderAvailabilityTable(filteredData);
        calculateSummary(filteredData);
        renderCharts(filteredData);
    }
    
    categoryFilter.addEventListener('change', filterData);

    
    calculateSummary(cropData);
    renderAvailabilityTable(cropData);
    renderCharts(cropData);
});