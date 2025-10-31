function solution(bandage, health, attacks) {
    let currentHealth = health;
    let [duration, hillPerSeconds, additionalHill] = bandage;
    let currentTime = 0;
    
    while(currentTime, attacks.length === 0, currentTime += 1) {
        if(!attacks || attacks.length === 0) break;
        
        const [attackTime, damage] = attacks[0];
        if(attacks[0][0] === currentTime) {
            currentHealth -= damage;
            attacks.shift();
            duration = bandage[0];
            if(currentHealth <= 0) {
                currentHealth = -1;
                break;
            }
        } else {
            currentHealth += hillPerSeconds;
            
            if(duration === 1) {
                currentHealth += additionalHill;
                duration = bandage[0];
            } else {
                duration -= 1;
            }
            if(currentHealth > health) currentHealth = health;
        }
    }
    return currentHealth;
}