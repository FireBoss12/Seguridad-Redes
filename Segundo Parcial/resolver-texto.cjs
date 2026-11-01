// Uso: node resolver-texto.cjs basic-mod2|rotation|transposition-trial archivo
// Las salidas son candidatos: hay que comprobarlos con el archivo real y CyLab.
const fs = require('node:fs');
const [mode, file] = process.argv.slice(2);
if (!file || !['basic-mod2', 'rotation', 'transposition-trial'].includes(mode)) {
  console.error('Uso: node resolver-texto.cjs basic-mod2|rotation|transposition-trial archivo');
  process.exit(1);
}
const text = fs.readFileSync(file, 'utf8');
if (mode === 'basic-mod2') {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
  const decoded = text.trim().split(/\s+/).map(token => {
    if (!/^\d+$/.test(token)) throw new Error('Número inválido: ' + token);
    const remainder = Number(BigInt(token) % 41n);
    const inverse = Array.from({ length: 40 }, (_, i) => i + 1)
      .find(i => (i * remainder) % 41 === 1);
    if (!inverse || inverse > alphabet.length) throw new Error('Valor fuera del alfabeto: ' + token);
    return alphabet[inverse - 1];
  }).join('');
  console.log('academy{' + decoded + '}');
} else if (mode === 'rotation') {
  for (let shift = 0; shift < 26; shift++) {
    const candidate = text.replace(/[A-Za-z]/g, c => {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode(base + (c.charCodeAt(0) - base + shift) % 26);
    });
    console.log('ROT ' + shift + ': ' + candidate);
  }
} else {
  // Se prueban las seis permutaciones para evitar asumir el orden del archivo.
  for (const order of [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]]) {
    const input = text.replace(/\r?\n$/, '');
    let candidate = '';
    for (let i = 0; i < input.length; i += 3) {
      const block = input.slice(i, i + 3);
      candidate += block.length === 3 ? order.map(j => block[j]).join('') : block;
    }
    console.log(order.join('') + ': ' + candidate);
  }
}
