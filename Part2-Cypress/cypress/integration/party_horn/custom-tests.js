describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  
  });

  it('First Test', () => {
    expect(true ).to.equal(true);
  });

  it('Change Number', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {expect($el).to.have.value(75)});
  });

  it('Change Slider', () => {
    cy.get("#volume-slider").invoke("val", 33).trigger('input');
    cy.get("#volume-number").then(($el) => {expect($el).to.have.value(33)});
  });

  it('Change Audio', () => {
    cy.get("#volume-slider").invoke("val", 33).trigger('input');
    cy.get("#horn-sound").then(($el) => {expect($el).to.have.prop("volume",0.33)});
  });

  it('Sound and Image Change', () => {
    cy.get("#radio-party-horn").click();
    cy.get("#horn-sound").then(($el) => {expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3")});
    cy.get("#sound-image").then(($el) => {expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg")});
  });

  it('Change Vol Image at 0', () => {
    cy.get("#volume-slider").invoke("val", 0).trigger('input');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg")});
  });

  it('Change Vol Image at 33', () => {
    cy.get("#volume-slider").invoke("val", 33).trigger('input');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg")});
  });

  it('Change Vol Image at 66', () => {
    cy.get("#volume-slider").invoke("val", 66).trigger('input');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg")});
  });

  it('Change Vol Image at 67', () => {
    cy.get("#volume-slider").invoke("val", 67).trigger('input');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg")});
  });

  it('Check State of Honk Button Empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {expect($el).to.have.prop("disabled", true)});
  });

  it('Check State of Honk Button Non-Number', () => {
    cy.get('#volume-number').clear().type("mdkovrf");
    cy.get('#honk-btn').then(($el) => {expect($el).to.have.prop("disabled", true)});
  });

  it('Out of Range input', () => {
    cy.get('[type="number"]').clear().type('101');
    cy.get("input:invalid").should('have.length',1);
  });



  
});
