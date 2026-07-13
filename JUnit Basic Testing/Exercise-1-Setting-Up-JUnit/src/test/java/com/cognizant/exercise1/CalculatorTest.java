package com.cognizant.exercise1;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    private ArithmeticCalculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new ArithmeticCalculator();
    }

    @Test
    void testAddition() {
        int result = calculator.add(10, 20);
        assertEquals(30, result);
    }

    @Test
    void testSubtraction() {
        int result = calculator.subtract(20, 10);
        assertEquals(10, result);
    }
}