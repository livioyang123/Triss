package it.ms.api.data.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Partita")
public class Partita {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JoinColumn(name = "giocatore1", nullable = false)
    private Giocatore giocatore1;

    @ManyToOne
    @JoinColumn(name = "giocatore2", nullable = false)
    private Giocatore giocatore2;

    @ManyToOne
    @JoinColumn(name = "vincitore")
    private Giocatore vincitore;

    // Default constructor
    public Partita() {
    }

    // Constructor
    public Partita(Giocatore g1, Giocatore g2) {
        this.giocatore1 = g1;
        this.giocatore2 = g2;
    }

    // Getters and setters
    public long getId() {
        return id;
    }

    public Giocatore getGiocatore1() {
        return giocatore1;
    }

    public Giocatore getGiocatore2() {
        return giocatore2;
    }

    public Giocatore getVincitore() {
        return vincitore;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setGiocatore1(Giocatore giocatore1) {
        this.giocatore1 = giocatore1;
    }

    public void setGiocatore2(Giocatore giocatore2) {
        this.giocatore2 = giocatore2;
    }

    public void setVincitore(Giocatore vincitore) {
        this.vincitore = vincitore;
    }
}