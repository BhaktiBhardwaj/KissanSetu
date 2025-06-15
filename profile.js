document.addEventListener('DOMContentLoaded', function() {
    
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    
    function loadProfile() {
        document.getElementById('profileName').textContent = user.name || 'Farmer';
        document.getElementById('profileLocation').textContent = user.farmLocation || 'Location not specified';
        document.getElementById('listingsCount').textContent = user.listings ? user.listings.length : 0;
        document.getElementById('ordersCount').textContent = user.orders ? user.orders.length : 0;
        document.getElementById('ratingValue').textContent = user.rating || '0.0';

        
        document.getElementById('editName').value = user.name || '';
        document.getElementById('editEmail').value = user.email || '';
        document.getElementById('editPhone').value = user.phone || '';
        document.getElementById('editLocation').value = user.farmLocation || '';
        document.getElementById('editCrops').value = user.crops || '';
        document.getElementById('editFarmSize').value = user.farmSize || '';
        document.getElementById('editExperience').value = user.experience || '0-5';
    }

    
    document.getElementById('uploadImageBtn').addEventListener('click', function() {
        document.getElementById('imageUpload').click();
    });

    document.getElementById('imageUpload').addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('profileImage').src = event.target.result;
                
                user.profileImage = event.target.result;
                localStorage.setItem('currentUser', JSON.stringify(user));
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        user.name = document.getElementById('editName').value;
        user.email = document.getElementById('editEmail').value;
        user.phone = document.getElementById('editPhone').value;
        user.farmLocation = document.getElementById('editLocation').value;
        user.crops = document.getElementById('editCrops').value;
        user.farmSize = document.getElementById('editFarmSize').value;
        user.experience = document.getElementById('editExperience').value;
        
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        
        loadProfile();
        
        
        alert('Profile updated successfully!');
    });

    
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            
            this.classList.add('active');
            document.getElementById(`${tabId}Tab`).classList.add('active');
            
            
            if (tabId === 'listings') loadUserListings();
            if (tabId === 'orders') loadUserOrders();
        });
    });

    
    function loadUserListings() {
        
        const listingsContainer = document.getElementById('userListings');
        
        if (user.listings && user.listings.length > 0) {
            listingsContainer.innerHTML = '';
            user.listings.forEach(listing => {
                const listingCard = document.createElement('div');
                listingCard.className = 'listing-card';
                listingCard.innerHTML = `
                    <div class="listing-image">
                        <img src="${listing.image || 'images/default-crop.jpg'}" alt="${listing.name}">
                    </div>
                    <div class="listing-details">
                        <h3>${listing.name}</h3>
                        <div class="listing-price">₹${listing.price}/kg</div>
                        <div class="listing-meta">
                            <span>${listing.quantity}kg available</span>
                            <span>${listing.location}</span>
                        </div>
                        <div class="listing-actions">
                            <a href="listing.html?id=${listing.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                `;
                listingsContainer.appendChild(listingCard);
            });
        }
    }

    
    function loadUserOrders() {
        
        const ordersContainer = document.getElementById('userOrders');
        
        if (user.orders && user.orders.length > 0) {
            ordersContainer.innerHTML = '';
            user.orders.forEach(order => {
                const orderCard = document.createElement('div');
                orderCard.className = 'order-card';
                orderCard.innerHTML = `
                    <div class="order-header">
                        <span>Order #${order.id}</span>
                        <span>${order.date}</span>
                    </div>
                    <div class="order-items">
                        ${order.items.map(item => `
                            <div class="order-item">
                                <span>${item.name} (${item.quantity}kg)</span>
                                <span>₹${item.price * item.quantity}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-footer">
                        <span>Total: ₹${order.total}</span>
                        <span>${order.status}</span>
                    </div>
                `;
                ordersContainer.appendChild(orderCard);
            });
        }
    }

    
    loadProfile();
});