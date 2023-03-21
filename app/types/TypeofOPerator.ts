/* eslint-disable @typescript-eslint/no-unused-vars */
const typeofOPerator = () => {
  let myStr = 'hello world';
  type A = typeof myStr; //string

  //Typeof As Type Guard
  const getAmount = (money: string | number): string => {
    let amount = '₹' + parseInt(money, 10);

    if (typeof money === 'string') {
      return '₹' + parseInt(money, 10);
    } else {
      return '₹' + money;
    }
  };

  //with function
  type FunType = ReturnType<getAmount>;

  type FunReturnType = ReturnType<typeof getAmount>;

  //TypeScript intentionally limits the sorts of expressions you can use typeof on.
  type B = typeof getAmount(10);


  //with undeclared variable
  let unDeclared;
  type unDeclaredVar = typeof unDeclared;

  type afterDeclared = typeof afterDeclaredVar;
  let afterDeclaredVar = true;
};

export default typeofOPerator;
