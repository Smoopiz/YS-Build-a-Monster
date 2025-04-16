class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = { sprite: {} };

        this.bodyX = 300;
        this.bodyY = 350;
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        document.getElementById('description').innerHTML =
            '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>';
    }

    create() {
        let my = this.my;

        //Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkB.png");

        //Arms
        my.sprite.armL1 = this.add.sprite(this.bodyX + 100, this.bodyY - 30, "monsterParts", "arm_darkB.png");
        my.sprite.armL2 = this.add.sprite(this.bodyX + 60, this.bodyY + 30, "monsterParts", "arm_darkB.png");
        my.sprite.armR1 = this.add.sprite(this.bodyX - 100, this.bodyY - 30, "monsterParts", "arm_darkB.png");
        my.sprite.armR2 = this.add.sprite(this.bodyX - 60, this.bodyY + 30, "monsterParts", "arm_darkB.png");
        my.sprite.armL1.angle = - 60
        my.sprite.armR1.angle = + 60
        my.sprite.armL2.angle = - 60
        my.sprite.armR2.angle = + 60
        my.sprite.armR1.flipX = true;
        my.sprite.armR2.flipX = true;

        //Legs
        my.sprite.legL = this.add.sprite(this.bodyX + 30, this.bodyY + 90, "monsterParts", "leg_darkB.png");
        my.sprite.legR = this.add.sprite(this.bodyX - 30, this.bodyY + 90, "monsterParts", "leg_darkB.png");
        my.sprite.legR.flipX = true;

        //Ears
        my.sprite.earL = this.add.sprite(this.bodyX + 50, this.bodyY - 90, "monsterParts", "detail_red_ear.png");
        my.sprite.earR = this.add.sprite(this.bodyX - 50, this.bodyY - 90, "monsterParts", "detail_red_ear.png");
        my.sprite.earL.angle = -30
        my.sprite.earR.angle = +30
        my.sprite.earR.flipX = true;

        //Eyes
        my.sprite.eyeL = this.add.sprite(this.bodyX + 40, this.bodyY - 50, "monsterParts", "eye_human_red.png");
        my.sprite.eyeR = this.add.sprite(this.bodyX - 40, this.bodyY - 50, "monsterParts", "eye_human_red.png");

        //Horn
        my.sprite.hornM = this.add.sprite(this.bodyX + 0, this.bodyY - 95, "monsterParts", "detail_white_horn_large.png");
        my.sprite.hornM.angle = -40

        //Smiles
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "mouthB.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;

        this.keys = this.input.keyboard.addKeys('A,D,S,F');
    }

    update() {
        let my = this.my;

        let dx = 0;
        if (this.keys.A.isDown) {
            dx = -1;
        } else if (this.keys.D.isDown) {
            dx = 1;
        }

        if (dx !== 0) {
            for (let part in my.sprite) {
                my.sprite[part].x += dx;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.keys.S)) {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        }

        if (Phaser.Input.Keyboard.JustDown(this.keys.F)) {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }
    }
}
