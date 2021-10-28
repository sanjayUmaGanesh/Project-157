AFRAME.registerComponent('cursor-listener', {
    schema: {
        selectedItemId: {defualt: "", type: "string"}
    },

    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },

    handlePlacesListState: function (){
        const id = this.el.getAttribute('id');
        const placesId = ["comic-1", "comic-2","comic-3","comic-4"];

        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute('cursor-listener', {
                selectedItemId: id
            })
            this.el.setAttribute('material', {
                color: "#D76B30",
                opacity: 1
            })
        }
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseenter', ()=> {
            this.handlePlacesListState();
        })
    },

    handleMouseLeaveEvents: function () {
        this.el.addEventListener('mouseleave', ()=>{
            const {selectedItemId} = this.data;

            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");

                if(id === selectedItemId){
                    el.setAttribute("material",{
                        color:"#0077CC",
                        opacity: 1
                    })
                }
            }
        })
    }
    
});
