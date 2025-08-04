// Products data
const productsData = {
  categories: ["Consolas","Herramientas", "Audio", "RC Cars", "Pedales"],
  products: [
    {
      id: 1,
      name: "Pipeishon ONE - Consola de Juegos Indie",
      price: 310000.00,
      category: "Consolas",
      description:
        "Olvida las consolas producidas en masa. La Pipeishon ONE es una experiencia de juego retro, construida a mano para verdaderos entusiastas. Cada botón, cada conexión y cada línea de código han sido ensamblados con un solo objetivo: recuperar la diversión pura y directa de los clásicos. Con una selección de juegos icónicos y un diseño ergonómico y robusto, no es una consola más en el mercado; es TU consola, una pieza única de la historia de los videojuegos, creada en nuestro taller.",
      images: [
        "img/fotoPipeishon1.jpeg", // Imagen principal o portada
        "img/fotoPipeishon2.jpeg", // Imagenes adicionales
        "img/fotoPipieshon4.jpeg",
      ],
    },
    {
      id: 2,
      name: "Pipeishon SOUND - Preamplificador y EQ de Estudio",
      price: 320000.99,
      category: "Audio",
      description:
        "En un mundo digital, el sonido analógico es un lujo. El Pipeishon SOUND es un amplificador integrado con preamplificador y ecualizador de cuatro bandas diseñado para los que escuchan con el alma. Cada perilla te permite esculpir el sonido con la precisión de un artesano, añadiendo la calidez, la profundidad y el carácter que solo los circuitos analógicos pueden ofrecer. Con su control de volumen deslizante de alta fidelidad y su construcción en madera, es más que un equipo de audio: es el corazón de tu sistema de sonido, una invitación a redescubrir tu música.",
      images: [
        "img/pipeishonsound1.jpeg",
        "img/pipeishonsound2.jpeg",
        "img/pipeishonsound3.jpeg",
        "img/pipeishonsound4.jpeg",
      ],
    },
    {
      id: 3,
      name: "Pipeishon MINIRcCar - Micro Autito de Precisión",
      price: 180000,
      category: "RC Cars",
      description:
        "La velocidad es un arte, y la miniaturización es su máxima expresión. El MINIRcCar es un ejercicio de ingeniería de precisión, un vehículo de radiocontrol completo ensamblado en un chasis que cabe en la palma de tu mano. Cada componente ha sido cuidadosamente seleccionado e integrado para ofrecer una agilidad y una respuesta instantáneas. No es un juguete, es un desafío a tus reflejos y una demostración de que la adrenalina puede venir en el frasco más pequeño.",
      images: [
        "img/pipeishonminirc1.jpeg",
        "img/pipeishonminirc2.jpeg",
        "img/pipeishonrminic3.jpeg",
      ],
    },
    {
      id: 4,
      name: "Pipeishon RcCar - Crawler de Exploración Custom",
      price: 420000.99,
      category: "RC Cars",
      description:
        "Construido para conquistar, no para competir. Este Crawler RC no está hecho para la pista, está hecho para el mundo real. Con un chasis modificado, suspensión de alto recorrido y una electrónica de potencia que entrega torque cuando más lo necesitas, cada roca, cada obstáculo y cada pendiente se convierten en una oportunidad para demostrar su habilidad. El terreno pone los límites, el Pipeishon RcCar te da las herramientas para superarlos.",
      images: [
        "img/pipeishonrc1.jpeg",
        "img/pipeishonrc2.jpeg",
        "img/pipeishonrc3.jpeg",
        "img/pipeishonrc4.jpeg",
      ],
    },
    {
      id: 5,
      name: "Pipeishon LIGHT - Reflector Táctico de Alta Potencia",
      price: 180000.99,
      category: "Herramientas",
      description:
        "No la llames linterna. La Pipeishon LIGHT es una herramienta de iluminación profesional, diseñada para las condiciones más exigentes. Construida sobre un chasis industrial y equipada con un sistema de lentes de precisión, proyecta un haz de luz intenso y enfocado capaz de cortar la oscuridad más densa. Su robustez y diseño funcional la convierten en la compañera ideal para trabajos de campo, exploraciones nocturnas o cualquier situación donde la fiabilidad no es una opción, es una necesidad.",
      images: [
        "img/pipeishonlight1.jpeg",
        "img/pipeishonlight2.jpeg",
        "img/pipeishonlight3.jpeg",
      ],
    },
    {
      id: 6,
      name: "Pipeishon TOOL - Herramienta de Potencia Inteligente",
      price: 85000.99,
      category: "Herramientas",
      description:
        "Potencia que puedes ver, confianza que puedes sentir. La Pipeishon TOOL fue creada para ser la herramienta definitiva: robusta, ergonómica y, sobre todo, fiable. Su sistema de potencia de Litio de alto rendimiento te asegura un rendimiento constante, mientras que su innovador indicador de batería de 4 niveles te permite saber siempre cuánta energía te queda. Es la herramienta que trabaja contigo, no contra ti.",
      images: ["img/pipeishontool1.jpeg", "img/pipeishontool2.jpeg", "img/pipeishontool3.jpeg"],
    },
    {
      id: 7,
      name: "Pipeishon RADIO - Receptor de Frecuencias Híbrido",
      price: 210000,
      category: "Audio",
      description:
        "El alma de la radio clásica, con la ingeniería del siglo XXI. La Pipeishon RADIO es un homenaje a la época dorada de la radiodifusión, pero construida para el mundo de hoy. Su corazón, un sintonizador de alta fidelidad rescatado y restaurado, garantiza una recepción clara y estable. Pero su verdadera innovación reside en su sistema de alimentación cuádruple: úsala con 220V en casa, con 12V en tu taller, con su batería interna para llevarla al parque o con pilas AA en una emergencia. Es la única radio que necesitarás, lista para todo. Ademas, podras escuchar nuestra frecuencia de 98.5Mhz con podcast y noticias para entrenerte todo el dia!!!.",
      images: [
        "img/pipeishonradio1.jpeg",
        "img/pipeishonradio4.jpeg.jpeg",
        "img/pipeishonradio5.jpeg",
      ],
    },
    {
      id: 8,
      name: "Pipeishon FUZZ (Edición Germanio) - Pedal de Tono Vintage",
      price: 160000,
      category: "Pedales",
      description:
        "Hay sonidos que definen generaciones. El 'fuzz' cálido, cremoso e impredecible de los transistores de germanio es uno de ellos. Es el tono que buscó Hendrix, el que definió el rock de los 60. El Pipeishon FUZZ no es un pedal de distorsión, es una máquina del tiempo. Cada unidad será ensamblada a mano, con transistores 'New Old Stock' medidos y seleccionados individualmente para lograr ese carácter único e irrepetible. Una edición limitada para los verdaderos cazadores de tono. Prepárate para conectar tu guitarra a la historia.",
      images: [
        "img/pipeishonpedal1.jpeg",
        "img/pipeishonpedal2.jpeg",
        "img/pipeishonpedal3.jpeg",
        "img/pipeishonpedal4.jpeg",
        "img/pipeishonpedal5.jpeg"
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
