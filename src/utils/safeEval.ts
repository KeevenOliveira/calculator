const safeEval = (expression: string): string => {
  const validExpressionRegex = /^[0-9+\-*/().]+$/;

  if (!validExpressionRegex.test(expression)) {
    throw new Error("Expressão inválida");
  }

  const formattedExpression = expression.replace(/x/g, "*");

  const finalExpression = formattedExpression.replace(/(\d+|\))(?=\()/g, "$1*");

  return new Function(`return ${finalExpression}`)().toString();
};

export default safeEval;
