package com.cognizant.assertions;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    void testAdd() {
        assertEquals(30, calculator.add(10, 20));
    }

    @Test
    void testSubtract() {
        assertEquals(5, calculator.subtract(15, 10));
    }

    @Test
    void testTrue() {
        assertTrue(20 > 10);
    }

    @Test
    void testFalse() {
        assertFalse(10 > 20);
    }

    @Test
    void testNotNull() {
        assertNotNull(calculator.getMessage());
    }

    @Test
    void testNull() {
        String name = null;
        assertNull(name);
    }

    @Test
    void testThrows() {
        assertThrows(ArithmeticException.class,
                () -> calculator.divide(10, 0));
    }
}