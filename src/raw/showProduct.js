const products = document.querySelectorAll('.product_content');
products.forEach(function(product) {
    product.addEventListener('click', function() {
        var img = product.querySelector('img').src
        var title = product.querySelector('.product_name').innerText
        var price = product.querySelector('.product_price').innerText
        createModal(img, title, price)
        closeModal()
    })
})

function createModal(img, title, price) {
    var modal = document.createElement('div')
    modal.classList.add('show_product_modal')
  
    var modalContent = '<div class="modal_container"><div class="img"><img src="'+ img +'" alt="" width="450px" height="100%"></div><div class="modal_info"><div class="modal_name">'+ title +'</div><div class="modal_price">'+ price +'</div><div class="free_ship"><p class="fr_title"><i class="ti-truck"></i> Miễn phí vận chuyển</p><p class="fr_condi">Miễn phí vận chuyển cho đơn hàng trên ₫50.000</p></div><div class="quantity"><div class="quantity_title">Số lượng </div><input class="num" type="number" value="1" min="1" max="999"></div><button class="add_to_cart">Thêm vào giỏ hàng</button><div class="note"><div class="note1"><i class="ti-back-left"></i> 7 ngày miễn phí trả hàng</div><div class="note2"><i class="ti-thumb-up"></i> Hàng chính hãng 100%</div><div class="note3"><i class="ti-check-box"></i> Miễn phí vận chuyển</div></div></div><label class="close_btn" for="show_product_modal"><i class="ti-close"></i></label>'
    modal.innerHTML = modalContent
    var body = document.querySelector('body');
    body.append(modal)
}

function closeModal() {
    var closeBtn = document.querySelectorAll('.close_btn')
    closeBtn.forEach(function(cls) {
        cls.addEventListener('click', function() {
            cls.parentElement.parentElement.style.display = 'none'
    })
    })
}
