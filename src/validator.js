const validator = {
    maskify:function(cc){
        return cc.split('').map((letras, idx) => idx < cc.length - 4 ? '#':letras).join('');
      },
    isValid:function(cc){

        return cc
    }

};

export default validator;