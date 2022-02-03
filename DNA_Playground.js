// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, dnaArr) => {
  let object = {
    specimenNum: num,
    dna: dnaArr,
    mutate() {
      let index = Math.floor(Math.random() * 15);
      let base = this.dna[index];
      while (base === this.dna[index]) {
        base = returnRandBase();
      }
      this.dna[index] = base;
    },
    compare(secObj) {
      let identical = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === secObj.dna[i]) {
          identical++;
        }
      }
      console.log(`The DNA shared between Specimen ${this.specimenNum} and ${secObj.specimenNum} are ${(identical / this.dna.length) * 100}%`);
    },
    willLikelySurvive() {
      let survGenes = 0;
      for (const base in this.dna) {
        if (this.dna[base] === 'C' | this.dna[base] === 'G') {
          survGenes++;
        }
      }
      if (survGenes / this.dna.length >= 0.6) {
        return true;
      }
      return false;
    }
  }
  return object;
}


let celegance3 = pAequorFactory(3, mockUpStrand());
let celegance2 = pAequorFactory(2, mockUpStrand());
console.log(celegance2.dna);
console.log(celegance3.dna);
console.log(celegance2.willLikelySurvive());
console.log(celegance3.willLikelySurvive());
// console.log(celegance3);
// console.log(celegance3.dna);
// celegance3.mutate();
// console.log(celegance3.dna);
celegance3.compare(celegance2)



