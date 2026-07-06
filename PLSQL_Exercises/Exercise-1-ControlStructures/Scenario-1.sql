
DECLARE
    v_age NUMBER;
BEGIN

    FOR c IN (SELECT CustomerID, DOB FROM Customers) LOOP

        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12);

        IF v_age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ID ' || c.CustomerID ||
                ' is above 60. Interest rate reduced by 1%.'
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/

--------------------------------------------------------
-- Verification
--------------------------------------------------------

SELECT LoanID,
       CustomerID,
       InterestRate
FROM Loans;

SELECT CustomerID,
       FLOOR(MONTHS_BETWEEN(SYSDATE, DOB) / 12) AS AGE
FROM Customers;