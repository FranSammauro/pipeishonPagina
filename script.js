// Products data - Productos reales de Pipeishon
const productsData = {
  categories: ["Herramientas", "Audio", "RC Cars", "Pedales"],
  // nose porque no me muestra las imagenes, la ruta esta bien puesta y deberia mostrarse.
  products: [
    {
      id: 1,
      name: "Pipeishon One",
      price: 15999.99,
      category: "Herramientas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      images: [
        "/img/pipeishonone1.jpg", // Imagen principal o portada
        "/img/pipeishonone2.jpg", // Imagenes adicionales
        "/img/pipeishonone3.jpg",
      ],
    },
    {
      id: 2,
      name: "Pipeishon Sound",
      price: 8999.99,
      category: "Audio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus de congue. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
      images: [
        "/img/pipeishonsound1.jpg",
        "/img/pipeishonsound2.jpg",
        "/img/pipeishonsound3.jpg",
        "/img/pipeishonsound4.jpg",
      ],
    },
    {
      id: 3,
      name: "Pipeishon MINI RcCar",
      price: 12999.99,
      category: "RC Cars",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.",
      images: [
        "/img/pipeishonrminic1.jpg",
        "/img/pipeishonrminic2.jpg",
        "/img/pipeishonrminic3.jpg",
      ],
    },
    {
      id: 4,
      name: "Pipeishon RcCar",
      price: 25999.99,
      category: "RC Cars",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede.",
      images: [
        "/img/pipeishonrc1.jpg",
        "/img/pipeishonrc2.jpg",
        "/img/pipeishonrc3.jpg",
        "/img/pipeishonrc4.jpg",
      ],
    },
    {
      id: 5,
      name: "Pipeishon Light",
      price: 4999.99,
      category: "Herramientas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
      images: [
        "/img/pipeishonlight1.jpg",
        "/img/pipeishonlight2.jpg",
        "/img/pipeishonlight3.jpg",
      ],
    },
    {
      id: 6,
      name: "Pipeishon Tool",
      price: 7999.99,
      category: "Herramientas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.",
      images: ["pipeishontool1.jpg", "pipeishontool2.jpg", "pipeishontool3.jpg"],
    },
    {
      id: 7,
      name: "Pipeishon Radio",
      price: 6999.99,
      category: "Audio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      images: [
        "/img/pipeishonradio1.jpg",
        "/img/pipeishonradio2.jpg",
        "/img/pipeishonradio3.jpg",
      ],
    },
    {
      id: 8,
      name: "Pipeishon Pedal Vintage",
      price: 18999.99,
      category: "Pedales",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pedal de distorsión para guitarra con sonido vintage auténtico. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      images: [
        "/img/pipeishonpedal1.jpg",
        "/img/pipeishonpedal2.jpg",
        "/img/pipeishonpedal3.jpg",
        "/img/pipeishonpedal4.jpg",
      ],
    },
  ],
}

// Global variables
let currentProducts = []
let cart = []
let currentCategory = "all"

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  loadProducts()
  loadCart()
  renderCategoryButtons()
  renderProducts()
  updateCartCount()

  // Initialize snake game
  snakeGame = new SnakeGame()
  snakeGame.draw() // Draw initial state
})

// Load products from data
function loadProducts() {
  currentProducts = productsData.products
}

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem("pipeishon-cart")
  if (savedCart) {
    cart = JSON.parse(savedCart)
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("pipeishon-cart", JSON.stringify(cart))
}

// Navigation functions
function showHome() {
  document.getElementById("home-section").classList.add("active")
  document.getElementById("products-section").classList.remove("active")
}

function showProducts() {
  document.getElementById("home-section").classList.remove("active")
  document.getElementById("products-section").classList.add("active")
}

// Render category buttons
function renderCategoryButtons() {
  const categoryContainer = document.getElementById("category-buttons")
  categoryContainer.innerHTML = ""

  productsData.categories.forEach((category) => {
    const button = document.createElement("button")
    button.className = "filter-btn"
    button.textContent = category.toUpperCase()
    button.setAttribute("data-category", category.toLowerCase())
    button.onclick = () => filterProducts(category.toLowerCase())
    categoryContainer.appendChild(button)
  })
}

// Filter products by category
function filterProducts(category) {
  currentCategory = category

  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  if (category === "all") {
    document.querySelector('.filter-btn[data-category="all"]').classList.add("active")
  } else {
    document.querySelector(`[data-category="${category}"]`).classList.add("active")
  }

  renderProducts()
}

// Render products grid
function renderProducts() {
  const productsGrid = document.getElementById("products-grid")
  productsGrid.innerHTML = ""

  const filteredProducts =
    currentCategory === "all"
      ? currentProducts
      : currentProducts.filter((product) => product.category.toLowerCase() === currentCategory)

  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)
  })
}

// Create product card element
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.onclick = () => showProductDetail(product)

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='📦';">
        </div>
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">$${product.price.toLocaleString("es-AR")}</div>
    `

  return card
}

// Show product detail modal
function showProductDetail(product) {
  const modal = document.getElementById("product-modal")
  const productDetail = document.getElementById("product-detail")

  // Create gallery HTML
  const galleryHTML = product.images
    .slice(1)
    .map(
      (img) =>
        `<div class="gallery-image" onclick="changeMainImage('${img}')">
        <img src="${img}" alt="${product.name}" onerror="this.parentNode.style.display='none';">
      </div>`,
    )
    .join("")

  productDetail.innerHTML = `
        <div class="product-detail">
            <div class="product-image" id="main-product-image">
                <img src="${product.images[0]}" alt="${product.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='📦';">
            </div>
            <div class="product-gallery">
                ${galleryHTML}
            </div>
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price.toLocaleString("es-AR")}</div>
            <div class="product-description">${product.description}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                AGREGAR AL CARRITO
            </button>
        </div>
    `

  modal.style.display = "block"
}

// Change main product image
function changeMainImage(imageSrc) {
  const mainImage = document.querySelector("#main-product-image img")
  if (mainImage) {
    mainImage.src = imageSrc
  }
}

// Close product modal
function closeProductModal() {
  document.getElementById("product-modal").style.display = "none"
}

// Add product to cart
function addToCart(productId) {
  const product = currentProducts.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  saveCart()
  updateCartCount()
  closeProductModal()

  // Show success animation
  showNotification("¡Producto agregado al carrito!")
}

// Update cart count in header
function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  document.getElementById("cart-count").textContent = cartCount
}

// Toggle cart modal
function toggleCart() {
  const modal = document.getElementById("cart-modal")
  const isVisible = modal.style.display === "block"

  if (isVisible) {
    modal.style.display = "none"
  } else {
    renderCart()
    modal.style.display = "block"
  }
}

// Render cart items
function renderCart() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align: center; color: #666;">Tu carrito está vacío</p>'
    cartTotal.textContent = "0.00"
    return
  }

  cartItems.innerHTML = ""
  let total = 0

  cart.forEach((item) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"

    cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString("es-AR")}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span style="color: #000; margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #dc2626; margin-left: 10px;">×</button>
            </div>
        `

    cartItems.appendChild(cartItem)
    total += item.price * item.quantity
  })

  cartTotal.textContent = total.toLocaleString("es-AR")
}

// Update item quantity in cart
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    removeFromCart(productId)
    return
  }

  saveCart()
  updateCartCount()
  renderCart()
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  saveCart()
  updateCartCount()
  renderCart()
}

// Checkout function - WhatsApp integration
function checkout() {
  if (cart.length === 0) {
    showNotification("¡Tu carrito está vacío!")
    return
  }

  // Create WhatsApp message
  let message = "¡Hola! Me interesa comprar los siguientes productos de PIPEISHON:\n\n"
  let total = 0

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity
    total += subtotal
    message += `${index + 1}. ${item.name}\n`
    message += `   Cantidad: ${item.quantity}\n`
    message += `   Precio unitario: $${item.price.toLocaleString("es-AR")}\n`
    message += `   Subtotal: $${subtotal.toLocaleString("es-AR")}\n\n`
  })

  message += `TOTAL: $${total.toLocaleString("es-AR")}\n\n`
  message += "¿Podrían confirmarme disponibilidad y forma de pago? ¡Gracias!"

  // Encode message for WhatsApp URL
  const encodedMessage = encodeURIComponent(message)
  const whatsappNumber = "5491137911261" // +54 9 11 3791-1261
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  // Open WhatsApp
  window.open(whatsappURL, "_blank")

  // Clear cart after checkout
  cart = []
  saveCart()
  updateCartCount()
  toggleCart()

  showNotification("¡Redirigiendo a WhatsApp!")
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: #ffffff;
        padding: 15px 25px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        z-index: 3000;
        border: 3px solid #000000;
        box-shadow: 3px 3px 0px #000000;
        animation: slideIn 0.5s ease-out;
    `
  notification.textContent = message

  // Add animation keyframes
  if (!document.getElementById("notification-styles")) {
    const style = document.createElement("style")
    style.id = "notification-styles"
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `
    document.head.appendChild(style)
  }

  document.body.appendChild(notification)

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.5s ease-out"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 500)
  }, 3000)
}

// Close modals when clicking outside
window.onclick = (event) => {
  const productModal = document.getElementById("product-modal")
  const cartModal = document.getElementById("cart-modal")

  if (event.target === productModal) {
    productModal.style.display = "none"
  }
  if (event.target === cartModal) {
    cartModal.style.display = "none"
  }
}

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductModal()
    if (document.getElementById("cart-modal").style.display === "block") {
      toggleCart()
    }
  }
})

// Snake Game Implementation
class SnakeGame {
  constructor() {
    this.canvas = document.getElementById("gameCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.gridSize = 20
    this.tileCount = this.canvas.width / this.gridSize

    this.snake = [{ x: 10, y: 10 }]
    this.food = {}
    this.dx = 0
    this.dy = 0
    this.score = 0
    this.gameRunning = false

    this.generateFood()
    this.loadHighScore()
    this.setupControls()
  }

  setupControls() {
    document.addEventListener("keydown", (e) => {
      if (!this.gameRunning) return

      // Use IJKL keys as requested
      switch (e.key.toLowerCase()) {
        case "i":
          if (this.dy !== 1) {
            this.dx = 0
            this.dy = -1
          }
          e.preventDefault()
          break
        case "k":
          if (this.dy !== -1) {
            this.dx = 0
            this.dy = 1
          }
          e.preventDefault()
          break
        case "j":
          if (this.dx !== 1) {
            this.dx = -1
            this.dy = 0
          }
          e.preventDefault()
          break
        case "l":
          if (this.dx !== -1) {
            this.dx = 1
            this.dy = 0
          }
          e.preventDefault()
          break
      }
    })
  }

  generateFood() {
    this.food = {
      x: Math.floor(Math.random() * this.tileCount),
      y: Math.floor(Math.random() * this.tileCount),
    }

    // Make sure food doesn't spawn on snake
    for (const segment of this.snake) {
      if (segment.x === this.food.x && segment.y === this.food.y) {
        this.generateFood()
        return
      }
    }
  }

  update() {
    if (!this.gameRunning) return

    const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy }

    // Check wall collision
    if (head.x < 0 || head.x >= this.tileCount || head.y < 0 || head.y >= this.tileCount) {
      this.gameOver()
      return
    }

    // Check self collision
    for (const segment of this.snake) {
      if (head.x === segment.x && head.y === segment.y) {
        this.gameOver()
        return
      }
    }

    this.snake.unshift(head)

    // Check food collision
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score += 10
      this.updateScore()
      this.generateFood()
    } else {
      this.snake.pop()
    }
  }

  draw() {
    // Clear canvas
    this.ctx.fillStyle = "#000000"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    // Draw snake
    this.ctx.fillStyle = "#10b981"
    for (const segment of this.snake) {
      this.ctx.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize - 2, this.gridSize - 2)
    }

    // Draw food
    this.ctx.fillStyle = "#dc2626"
    this.ctx.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize - 2, this.gridSize - 2)

    // Draw grid lines
    this.ctx.strokeStyle = "#333333"
    this.ctx.lineWidth = 1
    for (let i = 0; i <= this.tileCount; i++) {
      this.ctx.beginPath()
      this.ctx.moveTo(i * this.gridSize, 0)
      this.ctx.lineTo(i * this.gridSize, this.canvas.height)
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.moveTo(0, i * this.gridSize)
      this.ctx.lineTo(this.canvas.width, i * this.gridSize)
      this.ctx.stroke()
    }
  }

  gameLoop() {
    this.update()
    this.draw()

    if (this.gameRunning) {
      setTimeout(() => this.gameLoop(), 150)
    }
  }

  start() {
    this.snake = [{ x: 10, y: 10 }]
    this.dx = 0
    this.dy = 0
    this.score = 0
    this.gameRunning = true
    this.updateScore()
    this.generateFood()
    this.gameLoop()
  }

  gameOver() {
    this.gameRunning = false

    // Update high score
    const highScore = Number.parseInt(localStorage.getItem("snake-high-score") || "0")
    if (this.score > highScore) {
      localStorage.setItem("snake-high-score", this.score.toString())
      this.loadHighScore()
      showNotification(`¡Nuevo récord: ${this.score}!`)
    } else {
      showNotification(`¡Juego terminado! Puntuación: ${this.score}`)
    }
  }

  updateScore() {
    document.getElementById("gameScore").textContent = this.score
  }

  loadHighScore() {
    const highScore = localStorage.getItem("snake-high-score") || "0"
    document.getElementById("highScore").textContent = highScore
  }
}

// Initialize game
let snakeGame

// Start game function
function startGame() {
  if (!snakeGame) {
    snakeGame = new SnakeGame()
  }
  snakeGame.start()
}
