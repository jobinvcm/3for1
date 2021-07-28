purchase:
-- Name -- Reference id item
-- Price
-- Quantity
-- Tax
-- Person -- Reference id currentUser
-- TotalCalculated
-- AddedTime

sale:
-- itemName -- Reference id item
-- customerName -- reeference id customer
-- rate
-- quantity
-- tax
-- person -- Reference id currentUser
-- totalCalculated
-- addedTime

item:
-- itemName
-- person -- reference id currentUser

customer:
-- customerName
-- person -- reference id currentUser

currentUser:
-- name
-- email
-- mobilenumber
-- id
-- passwordHash
-- status
-- jwt

