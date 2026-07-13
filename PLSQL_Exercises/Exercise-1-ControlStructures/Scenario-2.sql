ALTER TABLE Customers
ADD IsVIP CHAR(1);

BEGIN

    FOR c IN (SELECT CustomerID, Balance FROM Customers) LOOP

        IF c.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = c.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ID ' || c.CustomerID ||
                ' promoted to VIP.'
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/


--------------------------------------------------------
-- Verification
--------------------------------------------------------

SELECT CustomerID,
       Name,
       Balance,
       IsVIP
FROM Customers;