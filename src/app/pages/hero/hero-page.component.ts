import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: "./hero-page.component.html",
})
export class HeroPageComponent {
    name = signal("Iron Man");
    age = signal(45);

    heroDescription = computed(() => {
        return `${this.name()} - ${this.age()}`;
    });

    capitalizedName = computed(() => this.name().toLocaleUpperCase());

    getHeroDescription(): string {
        return `${this.name()} - ${this.age()}`;
    }

    changeHero(): void {
        this.name.set("Spiderman");
        this.age.set(22);
    }

    changeAge(): void {
        this.age.set(60);
    }

    resetForm(): void {
        this.name.set("Iron Man");
        this.age.set(45);
    }
}