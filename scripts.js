// Global functionality for the API Hub

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('hidden');
    }
}

// Handle API selection in catalog
function toggleApiSelection(element) {
    if (element) {
        element.classList.toggle('bg-blue-50');
        
        // Toggle checkbox
        const checkbox = element.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
        }
        
        // Update selected count if present
        updateSelectedCount();
    }
}

// Update selected APIs count
function updateSelectedCount() {
    const selectedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const countElement = document.getElementById('selected-count');
    
    if (countElement) {
        countElement.textContent = selectedCount;
        
        // Enable/disable request button
        const requestButton = document.getElementById('request-button');
        if (requestButton) {
            if (selectedCount > 0) {
                requestButton.disabled = false;
                requestButton.classList.remove('opacity-50', 'cursor-not-allowed');
                requestButton.classList.add('hover:bg-blue-700');
            } else {
                requestButton.disabled = true;
                requestButton.classList.add('opacity-50', 'cursor-not-allowed');
                requestButton.classList.remove('hover:bg-blue-700');
            }
        }
    }
}

// Show modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// Hide modal
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Filter ministries or APIs
function filterItems(inputId, containerId) {
    const filterInput = document.getElementById(inputId);
    const container = document.getElementById(containerId);
    
    if (filterInput && container) {
        const filterValue = filterInput.value.toLowerCase();
        const items = container.getElementsByClassName('filter-item');
        
        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].textContent || items[i].innerText;
            if (itemText.toLowerCase().indexOf(filterValue) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    }
}

// Handle tab switching
function switchTab(tabId, contentId) {
    // Hide all tab contents
    const allContents = document.querySelectorAll('[id$="-content"]');
    allContents.forEach(content => {
        content.classList.add('hidden');
    });
    
    // Deactivate all tabs
    const allTabs = document.querySelectorAll('[id$="-tab"]');
    allTabs.forEach(tab => {
        tab.classList.remove('border-blue-500', 'text-blue-600');
        tab.classList.add('border-transparent', 'text-gray-500');
    });
    
    // Activate selected tab and content
    const selectedTab = document.getElementById(tabId);
    const selectedContent = document.getElementById(contentId);
    
    if (selectedTab && selectedContent) {
        selectedTab.classList.remove('border-transparent', 'text-gray-500');
        selectedTab.classList.add('border-blue-500', 'text-blue-600');
        selectedContent.classList.remove('hidden');
    }
} 